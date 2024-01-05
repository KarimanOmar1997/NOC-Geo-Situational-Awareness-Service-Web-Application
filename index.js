require([
 "esri/config",
  "esri/views/MapView",
  "esri/WebMap",
  "esri/widgets/LayerList",
  "esri/widgets/BasemapGallery",
  "esri/widgets/Legend",
  "esri/widgets/Expand",
  "esri/layers/FeatureLayer",
  "esri/widgets/Search",
  "esri/core/Handles",
  "esri/widgets/Feature",
  "esri/widgets/Popup",
  "esri/core/reactiveUtils",
  "esri/Graphic",
  "esri/rest/locator",
  "esri/widgets/AreaMeasurement2D",
  "esri/widgets/DistanceMeasurement2D",
  "esri/widgets/Compass",
  "esri/widgets/Home",
  "esri/widgets/Locate",
  "esri/widgets/Print",
  "esri/widgets/Fullscreen",
],  (
  esriConfig,
  MapView,
  WebMap,
  LayerList,
  BasemapGallery,
  Legend,
  Expand,
  FeatureLayer,
  Search,
  Handles,
  Feature,
  Popup, 
  reactiveUtils, 
  Graphic, 
  locator,
  AreaMeasurement2D,
  DistanceMeasurement2D,
  Compass,
  Home,
  Locate,
  Print,
  Fullscreen
) => {
  (async () => {
  let webmapId  = "f4f6642aa5514d83aae6de0ebb65057e";
  if (window.location.href.indexOf("?id=") > 0) {
    webmapId = window.location.href.split("?id=")[1];
  }

  /************************************************************
   * Creates a new webmap instance. A WebMap can reference
   * a PortalItem ID that represents a WebMap saved to
   * arcgis.com or an on-premise portal.
   * To load a WebMap from an on-premise portal, set the portal
   * url with esriConfig.portalUrl (see above).
   ************************************************************/
   const handles = new Handles();
    let layerBlockArray = [];
    let layerViews = [];
    const panel = document.getElementById("panel");
    const map = new WebMap({
    portalItem: {
      id: webmapId
    }
  });

  const view = new MapView({
    map: map,
    container: "viewDiv",
    popupEnabled: false,
    popup: new Popup()
  });

   // When view is ready
await map.when();
map.layers.forEach(async (layer) => {
  await layer.load();
  // Create a new Calcite block for each layer and add to an array to access later.
  const layerBlock = document.createElement("calcite-block");
  layerBlock.id = layer.title;
  layerBlock.heading = layer.title;
  layerBlock.open = true;
  layerBlockArray.push(layerBlock);
  // Create an array of layerViews to be able to highlight selected features.
  if (layer.type === "feature") {
    const layerView = await view.whenLayerView(layer);
    layerViews.push(layerView);
  }
});

// On view click, first remove all the previously added features (if any).
reactiveUtils.on(
  () => view,
  "click",
  async (event) => {
    // Remove any existing highlighted features
    handles.removeAll();
    layerBlockArray.forEach((block) => {
      while (block.lastElementChild) {
        block.removeChild(block.lastElementChild);
      }
    });

    // Call fetchFeatures and pass in the click event location.
    const fetchFeaturesResponse = await view.popup.fetchFeatures(event);

    // Iterate through the returned graphics once the allGraphicsPromise resolves.
    const graphics = await fetchFeaturesResponse.allGraphicsPromise;
    if (graphics.length > 0) {
      graphics.forEach((graphic) => {
        // For each layer's calcite block, loop through the graphics and add
        // the graphic to a feature widget into that block.
        layerBlockArray.forEach((block) => {
          const layerTitle = graphic.layer.title;
          if (block.heading === layerTitle) {
            panel.appendChild(block);
            const featureChild = new Feature({
              container: document.createElement("div"),
              graphic: graphic
            });
            block.appendChild(featureChild.container);
            // If the graphic comes from a feature layer, add a highlight
            // to that feature using the layerView.highlight method.
            if (graphic.layer.type === "feature") {
              layerViews.forEach((layerView) => {
                if (graphic.layer.name === layerView.layer.name) {
                  handles.add(layerView.highlight(graphic));
                }
              });
            }
          }
        });
      });
    }
  }
);

  // add legend, layerlist and basemapGallery widgets
  view.ui.add(
    [
      new Expand({
        content: new Legend({
          view: view
        }),
        view: view,
        group: "top-left"
      }),
      new Expand({
        content: new LayerList({ view: view }),
        view: view,
        group: "top-left"
      }),
      new Expand({
        content: new BasemapGallery({
          view: view
        }),
        view: view,
        expandIcon: "basemap",
        group: "top-left"
      })
  ],
  "top-left"
  );

  view.ui.add("clear-selection", "top-left");
  const test = new FeatureLayer({
    url: "https://services3.arcgis.com/N0l9vjYH8GLn5HZh/arcgis/rest/services/Asia_Cell_V4/FeatureServer/2",
  });
  document.getElementById("clear-selection").addEventListener("click", () => {
    handles.removeAll();
    layerBlockArray.forEach((block) => {
      while (block.lastElementChild) {
        block.removeChild(block.lastElementChild);
      }
    });
   });

  map.layers.getItemAt(3).popupTemplate = {
  title: "{site_id}",
  outFields: ["*"],
  returnGeometry: true,
  fieldInfos: [
    {
      fieldName: "site_id",
      label: "site id"
    },
    {
      fieldName: "site_name",
      label: "site name"
    }
  ],
  content: [
    // Add FieldContent to popup template.
    {
      type: "fields"
    },
    // Create RelationshipContent with the relationship between
    // the units and fires.
    {
      type: "relationship",
      // The numeric ID value for the defined relationship on the service.
      // This can be found on the service.
      relationshipId: 2,
      description: "Fires that {site_id} responded to from 2017-2021 ordered by most to least acreage burned.",
      // Display two related fire features in the list of related features.
      displayCount: 1,
      title: "site",
      // Order the related features by the 'GIS_ACRES' in descending order.
      orderByFields: {
        field: "site_id",
        order: "desc"
      }
    },
    // // Create RelationshipContent with the relationship between
    // // the units and wildfire protection facility statistics table.
    {
      type: "relationship",
      relationshipId: 2,
      description: "Statistics on the facilities for wildland fire protection that reside within {UNIT}.",
      // Display only the one unit
      displayCount: 1,
      title: "Unit Facility Statistics",
      // Order list of related records by the 'NAME' field in ascending order.
      orderByFields: {
        field: "site_id",
        order: "asc"
      }
    },
    // Create RelationshipContent with the relationship between
    // the counties and wildfire protection facilities.
    {
      type: "relationship",
      relationshipId: 2,
      description: "All facilities for wild land fire protection that reside in {UNIT}.",
      // Display only two related cities.
      displayCount: 1,
      title: "Facilities for Wildland Fire Protection",
      // Order list of related records by the 'NAME' field in ascending order.
      orderByFields: {
        field: "site_id",
        order: "asc"
      }
    }
  ]
}   
const featureLayerSites = new FeatureLayer({
url:
  "https://services3.arcgis.com/N0l9vjYH8GLn5HZh/arcgis/rest/services/Asia_Cell_V4/FeatureServer",
  popupTemplate: {
  title: "{site_id}",
  outFields: ["*"],
  returnGeometry: true,
  fieldInfos: [
    {
      fieldName: "site_id",
      label: "site id"
    },
    {
      fieldName: "site_name",
      label: "site name"
    }
  ],
  content: [
    // Add FieldContent to popup template.
    {
      type: "fields"
    },
    // Create RelationshipContent with the relationship between
    // the units and fires.
    {
      type: "relationship",
      // The numeric ID value for the defined relationship on the service.
      // This can be found on the service.
      relationshipId: 2,
      description: "Fires that {site_id} responded to from 2017-2021 ordered by most to least acreage burned.",
      // Display two related fire features in the list of related features.
      displayCount: 1,
      title: "site",
      // Order the related features by the 'GIS_ACRES' in descending order.
      orderByFields: {
        field: "site_id",
        order: "desc"
      }
    },
    // // Create RelationshipContent with the relationship between
    // // the units and wildfire protection facility statistics table.
    {
      type: "relationship",
      relationshipId: 3,
      description: "Statistics on the facilities for wildland fire protection that reside within {UNIT}.",
      // Display only the one unit
      displayCount: 1,
      title: "Unit Facility Statistics",
      // Order list of related records by the 'NAME' field in ascending order.
      orderByFields: {
        field: "site_id",
        order: "asc"
      }
    },
    // Create RelationshipContent with the relationship between
    // the counties and wildfire protection facilities.
    {
      type: "relationship",
      relationshipId: 1,
      description: "All facilities for wild land fire protection that reside in {UNIT}.",
      // Display only two related cities.
      displayCount: 1,
      title: "Facilities for Wildland Fire Protection",
      // Order list of related records by the 'NAME' field in ascending order.
      orderByFields: {
        field: "site_id",
        order: "asc"
      }
    }
  ]
},
});

const featureLayerComplaints = new FeatureLayer({
url: "https://services3.arcgis.com/N0l9vjYH8GLn5HZh/arcgis/rest/services/Asia_Cell_layer_493b7/FeatureServer",
popupTemplate: {
  // autocasts as new PopupTemplate()
  // title: "<a href={Web_Page} target='_blank'> {Name}</a>, ({Party}-{State}) ",
  title: "Mobile Number {comp_mobile}",
  overwriteActions: false
}
});
const searchWidget = new Search({
view: view,
allPlaceholder: "sites or Senator",
includeDefaultSources: false,
sources: [
  {
    layer: map.layers.getItemAt(3) ,
    searchFields: ["site_id"],
    displayField: "site_id",
    exactMatch: false,
    // outFields: ["*"],
    name: "Sites",
    placeholder: "example: BAG0400"
  },
  {
    layer: featureLayerComplaints,
    searchFields: ["comp_mobile"],
    // searchFields: ["comp_mobile", "Party"],
    suggestionTemplate: "{Name}, Party: {Party}",
    exactMatch: false,
    outFields: ["*"],
    placeholder: "example: 011236565434",
    name: "Senators",
    zoomScale: 500000,
    resultSymbol: {
      type: "picture-marker", // autocasts as new PictureMarkerSymbol()
      url: "https://developers.arcgis.com/javascript/latest/sample-code/widgets-search-multiplesource/live/images/senate.png",
      height: 36,
      width: 36
    }
  },
  {
    name: "ArcGIS World Geocoding Service",
    placeholder: "example: Nuuk, GRL",
    apiKey: "AAPK8439fc9a325c4593a3234a4fbafe73caXK2STpUubI24-8zi9egsX2fCBrOdoOUY5qDXEAIHWamfxipss0ffj3zCLo7amIE6"
,
    singleLineFieldName: "SingleLine",
    url: "https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer"
  }
]
});

// Add the search widget to the top left corner of the view
view.ui.add(searchWidget, {
position: "top-right"
});

        // add the toolbar for the measurement widgets
        view.ui.add("topbar", "top-right");

        // create the measurement widgets and hide them by default
        const distanceMeasurement2D = new DistanceMeasurement2D({
          view,
          visible: false
        });
        const areaMeasurement2D = new AreaMeasurement2D({
          view,
          visible: false
        });

        // event listener for distance measurements
        document.getElementById("distanceButton").addEventListener("click", function() {
          setActiveWidget(null);
          if (!this.classList.contains("active")) {
            setActiveWidget("distance");
          } else {
            setActiveButton(null);
          }
        });

        // event listener for area measurements
        document.getElementById("areaButton").addEventListener("click", function() {
          setActiveWidget(null);
          if (!this.classList.contains("active")) {
            setActiveWidget("area");
          } else {
            setActiveButton(null);
          }
        });

        document.getElementById('clearButton').addEventListener("click", () => {
            clearMeasurements();
          });

        // Clears all measurements
        function clearMeasurements() {
            setActiveWidget(null);
          }

        function setActiveWidget(type) {
          switch (type) {
            case "distance":
              areaMeasurement2D.visible = false;
              distanceMeasurement2D.visible = true;
              distanceMeasurement2D.viewModel.start();
              setActiveButton(document.getElementById("distanceButton"));
              break;
            case "area":
              distanceMeasurement2D.visible = false;
              areaMeasurement2D.visible = true;
              areaMeasurement2D.viewModel.start();
              setActiveButton(document.getElementById("areaButton"));
              break;
            case null:
              areaMeasurement2D.visible = false;
              distanceMeasurement2D.visible = false;
              break;
          }
        }

        function setActiveButton(selectedButton) {
          // focus the view to activate keyboard shortcuts for sketching
          view.focus();
          let elements = document.getElementsByClassName("active");
          for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove("active");
          }
          if (selectedButton) {
            selectedButton.classList.add("active");
          }
        }

 const homeBtn = new Home({
    view: view
});
        
// Add the home button to the top left corner of the view
view.ui.add(homeBtn, "top-right");

const locateBtn = new Locate({
    view: view
  });

  // Add the locate widget to the top left corner of the view
  view.ui.add(locateBtn, {
    position: "top-right"
  });

/********************************
* Create a compass widget object.
 *********************************/

const compassWidget = new Compass({
     view: view
});

  view.ui.add(
    [
      new Expand({
        content: new Print({
            view: view,
            // specify your own print service
            printServiceUrl:
               "https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task"
          }),
        view: view,
        group: "top-right"
      }),
  ],
  "top-right"
  );

  const applicationDiv = document.getElementById("applicationDiv");

  view.ui.add(
    new Fullscreen({
      view: view,
      element: applicationDiv
    }),
    "top-right"
  );

          
// Add the Compass widget to the top left corner of the view
view.ui.add(compassWidget, "top-right");


const typeSelect = document.getElementById("type-select");
view.ui.add("controls", "bottom-left");

typeSelect.addEventListener("change", async() => {
  const value = typeSelect.value;
    const layer = map.layers.getItemAt(7);
    await layer.load();
    // Create an array of layerViews to be able to highlight selected features.
    if (layer.type === "feature") {
      const layerView = await view.whenLayerView(layer);
      
        layerView.filter =
      value === "all"
      ? null
      : {
          where: `sd_status = '${value}'`
        };
    }
  // });
});

document.getElementById("SearchBTN").addEventListener("click", searchOnMap);
function searchOnMap(){
var addressVar = document.getElementById("SearchInput").value
console.log(addressVar);
const geocodingServiceUrl = "https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer";

const params = {
address: {
  "address": addressVar
}
}

locator.addressToLocations(geocodingServiceUrl, params).then((results) => {

showResult(results);
});


function showResult(results) {
if (results.length) {
  var query = results[0];
  console.log(query);
  const result = results[0];
  console.log(result.location.longitude.toFixed(5) + "," + result.location.latitude.toFixed(5))
  view.graphics.add(new Graphic({
      symbol: {
        type: "simple-marker",
        color: "#000000",
        size: "8px",
        outline: {
          color: "#ffffff",
          width: "1px"
        }
      },
      geometry: result.location,
      attributes: {
        title: "Address",
        address: result.address,
        score: result.score
      },
      popupTemplate: {
        title: "{title}",
        content: result.address + "<br><br>" + result.location.longitude.toFixed(5) + "," + result.location.latitude.toFixed(5)
      }
    }
  ));
  if (results.length) {
    const g = view.graphics.getItemAt(view.graphics._items.length-1);
    view.openPopup({
      features: [g],
      location: g.geometry
    });
    getDitalls(g.geometry)
  }
  view.goTo({
    target: result.location,
    zoom: 13
  });
}
}
};

const SitesFeatureLayer = new FeatureLayer({
url: "https://services3.arcgis.com/N0l9vjYH8GLn5HZh/arcgis/rest/services/Asia_Cell_V4/FeatureServer/2",
});

function getDitalls(point){

var query = SitesFeatureLayer.createQuery();

// Set the geometry for the query
query.geometry = point;

// Execute the query
SitesFeatureLayer.queryFeatures(query).then(function(result){
    // Check if any features were found
    if (result.features.length > 0) {
        var polygon = result.features[result.features.length-1]; // Assuming you want the first polygon if there are multiple intersections
        // Do something with the polygon, e.g., access attributes: polygon.attributes
        console.log(polygon.attributes.site_id);
        getSitesFeatureLayer(polygon.attributes.site_id)
      } else {
        console.log("Point is not within any polygon.");
        document.getElementById("Data_Container").innerHTML =` `
    }
}).catch(function(error){
    console.error("Error during query: ", error);
});
}
var MaintenanceSiteOperationFeatureLayer = new FeatureLayer({
url: "https://services3.arcgis.com/N0l9vjYH8GLn5HZh/arcgis/rest/services/Asia_Cell_V4/FeatureServer/4"
});
var OutagesDataFeatureLayer = new FeatureLayer({
url: "https://services3.arcgis.com/N0l9vjYH8GLn5HZh/arcgis/rest/services/Asia_Cell_V4/FeatureServer/5"
});

// Define the query parameters
function getSitesFeatureLayer(site_id){

  var queryParams = {
    where: `site_id = '${site_id}'`, // Specify your query criteria
    outFields: ["*"] // Specify the fields you want to retrieve
  };
  document.getElementById("Data_Container").innerHTML =` `
  // Execute the query
  SitesFeatureLayer.queryFeatures(queryParams)
    .then(function(result) {
      // Handle the query result
      document.getElementById("Data_Container").innerHTML +=`
      <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button fw-bold text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Network Coverage Data
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body" id="collapseOneBody">
        </div>
      </div>
    </div>
      `
     
      for (let index = 0; index < result.features.length; index++) {
        const element = result.features[index];
        document.getElementById("collapseOneBody").innerHTML +=`
        <table  class="mt-3 table table-striped table-bordered">
        <thead>
          <th colspan="2">Site ID: ${element.attributes.site_id?element.attributes.site_id:" "}</th>
        </thead>
      <tbody>
        <tr>
          <th>Coverage Status: </th>
          <td> ${element.attributes.coverage_status?element.attributes.coverage_status:" "}</td>
        </tr>
        <tr>
          <th>Coverage Status Date Time: </th>
          <td> ${element.attributes.coverage_status_date_time?element.attributes.coverage_status_date_time:" "}</td>
        </tr>
        <tr>
          <th>Coverage Location: </th>
          <td> ${element.attributes.coverage_location?element.attributes.coverage_location:" "}</td>
        </tr>
        <tr>
          <th>CGI: </th>
          <td> ${element.attributes.cgi?element.attributes.cgi:" "}</td>
        </tr>
        <tr>
          <th>Site Name: </th>
          <td> ${element.attributes.site_name?element.attributes.site_name:" "}</td>
        </tr>
        <tr>
          <th>Latitude: </th>
          <td> ${element.attributes.latitude?element.attributes.latitude:" "}</td>
        </tr>
        <tr>
          <th>Longitude: </th>
          <td> ${element.attributes.longitude?element.attributes.longitude:" "}</td>
        </tr>

      </tbody>
    </table>
      `
        console.log("site",element.attributes);
      }
    })
    .catch(function(error) {
      // Handle errors
      console.error("Error performing query:", error);
    });
  // Execute the query
  MaintenanceSiteOperationFeatureLayer.queryFeatures(queryParams)
    .then(function(result) {
      // Handle the query result
      document.getElementById("Data_Container").innerHTML +=`
      <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button class="accordion-button collapsed fw-bold text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Maintenance Site Operation Data
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div class="accordion-body" id="collapseTwoBody">
        </div>
      </div>
    </div>
      `
     
      for (let index = 0; index < result.features.length; index++) {
        const element = result.features[index];
        var perationDateObj = new Date(element.attributes.peration_date)
        document.getElementById("collapseTwoBody").innerHTML +=`
        <table  class="mt-3 table table-striped table-bordered">
        <thead>
          <th colspan="2">Cell ID: ${element.attributes.cell_id?element.attributes.cell_id:" "}</th>
        </thead>
      <tbody>
        <tr>
          <th>Operation Category: </th>
          <td> ${element.attributes.operation_category?element.attributes.operation_category:" "}</td>
        </tr>
        <tr>
          <th>Operation ID: </th>
          <td> ${element.attributes.operation_id?element.attributes.operation_id:" "}</td>
        </tr>
        <tr>
          <th>Operation Name: </th>
          <td> ${element.attributes.operation_name?element.attributes.operation_name:" "}</td>
        </tr>
        <tr>
          <th>Peration Date: </th>
          <td> ${perationDateObj?perationDateObj.toUTCString():" "}</td>
        </tr>
        <tr>
          <th>Site ID: </th>
          <td> ${element.attributes.site_id?element.attributes.site_id:" "}</td>
        </tr>
        <tr>
          <th>Status: </th>
          <td> ${element.attributes.status?element.attributes.status:" "}</td>
        </tr>
      </tbody>
    </table>
      `
        console.log("MaintenanceSiteOperation",element.attributes);
      }
    })
    .catch(function(error) {
      // Handle errors
      console.error("Error performing query:", error);
    });

  // Execute the query
  OutagesDataFeatureLayer.queryFeatures(queryParams)
    .then(function(result) {
      // Handle the query result
      document.getElementById("Data_Container").innerHTML +=`
      <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button collapsed fw-bold text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Outages Data
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div class="accordion-body" id="collapseThreeBody">
        </div>
      </div>
    </div>
      `
      for (let index = 0; index < result.features.length; index++) {
        const element = result.features[index];
        var clearanceTimeDateObj = new Date(element.attributes.clearance_time);
        var closeTimeDateObj = new Date(element.attributes.close_time);
        document.getElementById("collapseThreeBody").innerHTML +=`
        <table  class="mt-3 table table-striped table-bordered">
        <thead>
          <th colspan="2">Incident ID: ${element.attributes.incident_id?element.attributes.incident_id:" "}</th>
        </thead>
      <tbody>
        <tr>
          <th>Affected Sector: </th>
          <td> ${element.attributes.affected_sector?element.attributes.affected_sector:" "}</td>
        </tr>
        <tr>
          <th>Affectedobject: </th>
          <td> ${element.attributes.affectedobject?element.attributes.affectedobject:" "}</td>
        </tr>
        <tr>
          <th>Alarm Number: </th>
          <td> ${element.attributes.alarm_number?element.attributes.alarm_number:" "}</td>
        </tr>
        <tr>
          <th>Alarm Severity: </th>
          <td> ${element.attributes.alarm_severity?element.attributes.alarm_severity:" "}</td>
        </tr>
        <tr>
          <th>Assignment: </th>
          <td> ${element.attributes.assignment?element.attributes.assignment:" "}</td>
        </tr>
        <tr>
          <th>Cell ID: </th>
          <td> ${element.attributes.cell_id?element.attributes.cell_id:" "}</td>
        </tr>
        <tr>
          <th>Clearance Time: </th>
          <td> ${clearanceTimeDateObj?clearanceTimeDateObj.toUTCString():" "}</td>
        </tr>
        <tr>
          <th>Close Time: </th>
          <td> ${closeTimeDateObj?closeTimeDateObj.toUTCString():" "}</td>
        </tr>
        <tr>
          <th>Cluster: </th>
          <td> ${element.attributes.cluster?element.attributes.cluster:" "}</td>
        </tr>
        <tr>
          <th>Duration: </th>
          <td> ${element.attributes.duration?element.attributes.duration:" "}</td>
        </tr>
        <tr>
          <th>Element: </th>
          <td> ${element.attributes.element?element.attributes.element:" "}</td>
        </tr>
        <tr>
          <th>Incident ID: </th>
          <td> ${element.attributes.incident_id?element.attributes.incident_id:" "}</td>
        </tr>
        <tr>
          <th>Kpi Category: </th>
          <td> ${element.attributes.kpi_category?element.attributes.kpi_category:" "}</td>
        </tr>
        <tr>
          <th>Kpi Subcategory: </th>
          <td> ${element.attributes.kpi_subcategory?element.attributes.kpi_subcategory:" "}</td>
        </tr>
        <tr>
          <th>NE Name: </th>
          <td> ${element.attributes.ne_name?element.attributes.ne_name:" "}</td>
        </tr>
        <tr>
          <th>Notification ID: </th>
          <td> ${element.attributes.notification_id?element.attributes.notification_id:" "}</td>
        </tr>
        <tr>
          <th>Open Time: </th>
          <td> ${element.attributes.open_time?element.attributes.open_time:" "}</td>
        </tr>
        <tr>
          <th>Original_event Time: </th>
          <td> ${element.attributes.original_event_time?element.attributes.original_event_time:" "}</td>
        </tr>
        <tr>
          <th>Problem Category: </th>
          <td> ${element.attributes.problem_category?element.attributes.problem_category:" "}</td>
        </tr>
        <tr>
          <th>Province City: </th>
          <td> ${element.attributes.province_city?element.attributes.province_city:" "}</td>
        </tr>
        <tr>
          <th>Reason: </th>
          <td> ${element.attributes.reason?element.attributes.reason:" "}</td>
        </tr>
        <tr>
          <th>Resolution: </th>
          <td> ${element.attributes.resolution?element.attributes.resolution:" "}</td>
        </tr>
        <tr>
          <th>Resolution Code: </th>
          <td> ${element.attributes.resolution_code?element.attributes.resolution_code:" "}</td>
        </tr>
        <tr>
          <th>Service Affected: </th>
          <td> ${element.attributes.service_affected?element.attributes.service_affected:" "}</td>
        </tr>
        <tr>
          <th>Site ID: </th>
          <td> ${element.attributes.site_id?element.attributes.site_id:" "}</td>
        </tr>
        <tr>
          <th>Site Name: </th>
          <td> ${element.attributes.site_name?element.attributes.site_name:" "}</td>
        </tr>
        <tr>
          <th>Status: </th>
          <td> ${element.attributes.status?element.attributes.status:" "}</td>
        </tr>
        <tr>
          <th>Update Time: </th>
          <td> ${element.attributes.update_time?element.attributes.update_time:" "}</td>
        </tr>
      </tbody>
    </table>
      `
      console.log("OutagesData",element.attributes);
      }
    })
    .catch(function(error) {
      // Handle errors
      console.error("Error performing query:", error);
    });
}

// ========================================charts==============================================

const layer = map.layers.getItemAt(7);
console.log(layer);
await layer.load();
let layerView = await view.whenLayerView(layer);

// prepare data for total accidents by time of day chart
let charts = [], hourData = [], hourLabels = [];

// Accidents by time of day chart
// run stats query to return total number of accidents by time of day
// stats results will be grouped by the time of day
const hourResult = await runQuery("1=1", "extract(hour from sd_open_time)");
for (let feature of hourResult.features) {
  hourData.push(feature.attributes["count"]);
  console.log(feature);
  // hourLabels.push(feature.attributes["EXPR_1"]+2>12?(feature.attributes["EXPR_1"]+2)-12:feature.attributes["EXPR_1"]+2);
  hourLabels.push(feature.attributes["EXPR_1"]);
}

// create a bar chart showing total number of accidents by time of day
updateChart("chart-day", hourData, hourLabels, false, 50);

// Accidents by time by months
// run stats query to return total number of accidents by months
let monthData = [];
let monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const monthResult = await runQuery("1=1", "extract(month from sd_open_time)");
for (let feature of monthResult.features) {
  console.log(feature.attributes["count"]);
  monthData.push(feature.attributes["count"]);
}

// create a bar chart showing total number of accidents by months
updateChart("chart-month", monthData, monthLabels, false, 50);
// run stats query to return total number of accidents by week days
let weekData = [];
// const weekResult = await runQuery("1=1", "DAY_WEEK");
// for (let feature of weekResult.features) {
//   weekData.push(feature.attributes["count"]);
// }

// Accidents by days of week
// week day labels are used for the total number of accidents by week days
const weekLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// create a bar chart showing total number of accidents by week days
updateChart("chart-week", weekData, weekLabels, false, 50);

let SDStatusData = [], SDStatusLabels = [];
// Accidents by time of day chart
// run stats query to return total number of accidents by time of day
// stats results will be grouped by the time of day
const SDStatusResult = await runQuery("1=1", "sd_status");
for (let feature of SDStatusResult.features) {
  SDStatusData.push(feature.attributes["count"]);
  console.log(feature.attributes);
  SDStatusLabels.push(feature.attributes["sd_status"]);
}

      // create a bar chart showing total number of accidents by time of day
      updateChart("chart-SDStatus", SDStatusData, SDStatusLabels, false, 50);


      let SUBCATEGORYData = [], SUBCATEGORYLabels = [];
      // Accidents by time of day chart
      // run stats query to return total number of accidents by time of day
      // stats results will be grouped by the time of day
      const SUBCATEGORYResult = await runQuery("1=1", "subcategory");
      for (let feature of SUBCATEGORYResult.features) {
        SUBCATEGORYData.push(feature.attributes["count"]);
        console.log(feature.attributes);
        SUBCATEGORYLabels.push(feature.attributes["subcategory"]);
      }

      // create a bar chart showing total number of accidents by time of day
      updatePieChart("chart-subcategory", SUBCATEGORYData, SUBCATEGORYLabels, false, 50);


let dayDistributionChart = updateChart("chart-day-distribution", [], hourLabels, true, 50);

// this function is called 3 times when the app loads and generates
// count stats for accidents 1. by time of day 2. by day of week and 3. by month
async function runQuery(where, groupStats) {
  // create a query object that honors the layer settings
  let query = layer.createQuery();
  query.where = where;
  query.outStatistics = [
    {
      statisticType: "count",
      onStatisticField: "*",
      outStatisticFieldName: "count"
    }
  ];
  query.groupByFieldsForStatistics = [groupStats];
  query.orderByFields = [groupStats];
  let result = await layer.queryFeatures(query);
  return result;
}

// Keeps track of a selected bar on monthly or week day chart
// We use this info to toggle the clicked bar color
let previouslySelectedBarIndex = null;

// this function is called when user hover the mouse over accidents charts.
// Accidents layer view feature effect will be updated to highlight features
// that fall within the selected time, week day or month
async function applyFilterToAccidentsData(event, chart) {
  const activePoints = chart.getElementsAtEvent(event);
  // user did not click on a bar. stop here.
  if (activePoints.length == 0) {
    return;
  }
  const chartData = activePoints[0]["_chart"].config.data;
  const idx = activePoints[0]["_index"];

  // There is a selected bar already. Clear up the previous selection before applying a new change
  if (previouslySelectedBarIndex >= 0) {
    // change the bar color back to blue
    if (!event.target.id == "chart-subcategory"){

      changeBarColor(chart, previouslySelectedBarIndex, "#007AC2");
    }
    // clear the feature effect and reset the previous index
    if (previouslySelectedBarIndex === idx) {
      previouslySelectedBarIndex = null;
      layerView.featureEffect = undefined;

    if (dayDistributionChart) {
      dayDistributionChart.data.datasets[0].data = [];
      dayDistributionChart.update();
      dayChartBreakDownBlock.heading = "Click on the graph bar to see hourly chart";
    }
      return;
    }
  }

  // feature effect will be applied based on the chart bar user clicked on
  if (activePoints[0]) {
    const label = chartData.labels[idx];
    if (!event.target.id == "chart-subcategory"){

      changeBarColor(chart, idx, "red");
    }
    previouslySelectedBarIndex = idx;
    let where;
    // apply effect to accidents happened during the selected hour
    if (event.target.id == "chart-day") {
      const queryValue = label;
      where = `extract(hour from sd_open_time) = ${queryValue}`;
      console.log(where);
    } else if (event.target.id == "chart-month") {
      // apply effect to accidents happened during the selected month
      const queryValue = monthLabels.indexOf(label) + 1;
      where = `extract(month from sd_open_time) = ${queryValue}`;
      const title = "Accidents by days in " + label;
      dayDistributionStats(where, "extract(day from sd_open_time)", title);
    }else if (event.target.id == "chart-SDStatus") {
      // apply effect to accidents happened during the selected month
      const queryValue = label;
      where = `sd_status = '${queryValue}'`;
    } else if (event.target.id == "chart-subcategory") {
      // apply effect to accidents happened during the selected month
      const queryValue = label;
      where = `subcategory = '${queryValue}'`;
    }else if (event.target.id == "chart-week") {
      // apply effect to accidents happened during the selected week day
      const queryValue = weekLabels.indexOf(label) + 1;
      // where = `sd_open_time = ${queryValue}`;
      // where = `DAY_WEEK = ${queryValue}`;
      // const title = "Accidents by hours on " + label;
      // dayDistributionStats(where, "extract(hour from sd_open_time)", title);
    }
    layerView.featureEffect = {
      filter: {
        where
      },
      excludedEffect: "blur(2px) opacity(0.2) grayscale(0.2)"
    };
  }
}

async function dayDistributionStats(where, groupStats, label) {
  const result = await runQuery(where, groupStats);
  let chartData = [], chartLabels = [];

  for (let feature of result.features) {
    chartData.push(feature.attributes["count"]);
    chartLabels.push(feature.attributes["EXPR_1"]);
  }

  if (dayChartBreakDownBlock.style.display === "none") {
    dayChartBreakDownBlock.style.display = "block";
  }

  dayChartBreakDownBlock.heading = label;
  dayDistributionChart.data.datasets[0].data = chartData;
  dayDistributionChart.data.labels = chartLabels;

  const backgroundColors = Array(chartData.length).fill("#007AC2");
  dayDistributionChart.data.datasets[0].backgroundColor = backgroundColors;
  dayDistributionChart.update();
}

// called from applyFilterToAccidentsData function to update the clicked bar color
function changeBarColor(chart, index, color) {
  chart.data.datasets[0].backgroundColor[index] = color;
  chart.update();
}

// UI controls visible in the upper right panel
let activeGraph = "day";
const chartChoiceControl = document.getElementById("type-chips");
const chartBlock = document.getElementById("chart-block");
const chartDay = document.getElementById("chart-day");
const chartWeek = document.getElementById("chart-week");
const chartMonth = document.getElementById("chart-month");
const dayChartBreakDownBlock = document.getElementById("day-chart-block");

// Show the corresponding chart when user clicks one of the three buttons
chartChoiceControl?.addEventListener("calciteChipGroupSelect", (event) => {
    // clear feature effect on the layer view and clicked bar chart
    for (let chart of charts) {
      changeBarColor(chart, previouslySelectedBarIndex, "#007AC2");
    }
    layerView.featureEffect = undefined;
    previouslySelectedBarIndex = null;
    dayChartBreakDownBlock.style.display = "none";
    chartDay.style.display = "none";
    chartWeek.style.display = "none";
    chartMonth.style.display = "none";
    switch (event.target.selectedItems[0].value) {
      case "day":
        chartBlock.heading = "Total accidents by time of day";
        chartDay.style.display = "block";
        break;
      case "week":
        chartBlock.heading = "Total accidents by day of week";
        chartWeek.style.display = "block";
        break;
      case "month":
        chartBlock.heading = "Total accidents by month";
        chartMonth.style.display = "block";
      default:
    }
  }
);

// this function is called when the app loads. It creates three charts showing
// total accidents by time of day, by day of the week and months

function updatePieChart(canvas, data, labels, remove, max) {
  const canvasElement = document.getElementById(canvas);

  // Get the canvas element and render the chart in it
  let chart = new Chart(canvasElement.getContext("2d"), {
    type: "doughnut",
    data: {
      labels: labels,
      datasets: [
        {
          backgroundColor: [
                "#9e549c",
                "#f789d8",
                "#149dcf",
                "#ed5050",
                "#ffde3e",
                "#a6c736",
                "#b7804a",
                "#fc9220",
                "#9e9e9e"
              ],
          data: data
        }
      ]
    },
    options: {
        responsive: false,
        cutoutPercentage: 0,
        legend: {
          position: "bottom"
        },
        title: {
          display: true,
          text: ""
        }
      },
      size: 50
  });
  if (!remove) {
    charts.push(chart);
    // add mouse-move event listener on the charts so that we can display features
    // corresponding to the selected by on the chart
    canvasElement.addEventListener("click", async () => {
      const data = await applyFilterToAccidentsData(event, chart);
    });
  }

  return chart;
}

function updateChart(canvas, data, labels, remove, max) {
  const canvasElement = document.getElementById(canvas);

  const backgroundColors = Array(data.length).fill("#007AC2");
  // Get the canvas element and render the chart in it
  let chart = new Chart(canvasElement.getContext("2d"), {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          backgroundColor: backgroundColors,
          data: data
        }
      ]
    },
    options: {
      responsive: false,
      legend: {
        display: false
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: max
            }
          }
        ]
      },
      tooltips: {
        displayColors: false,
        callbacks: {
          label: (tooltipItem, data) => {
            const total =
              data.datasets[tooltipItem.datasetIndex].data[
                tooltipItem.index
              ];
            return (
              data.labels[tooltipItem.index] +
              " - Total accidents: " +
              total
            );
          }
        }
      }
    }
  });
  if (!remove) {
    charts.push(chart);
    // add mouse-move event listener on the charts so that we can display features
    // corresponding to the selected by on the chart
    canvasElement.addEventListener("click", async () => {
      const data = await applyFilterToAccidentsData(event, chart);
    });
  }

  return chart;
}


function createSymbol(color) {
  return {
    type: "simple-marker",
    color: color,
    size: "5px",
    outline: null,
    outline: {
      color: "rgba(153, 31, 23, 0.3)",
      width: 0.3
    }
  };
}
})();
});
