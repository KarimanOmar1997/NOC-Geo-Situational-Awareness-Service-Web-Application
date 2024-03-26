// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","./Ellipsoid"],function(d,a){const e=Math.PI/180,c=a.earth.radius,b=a.earth.eccentricitySquared;a={4267:{a:6378206.4,f:1/294.9786982},4269:{a:6378137,f:1/298.257222101},4326:{a:a.earth.radius,f:a.earth.flattening},104900:{a:2439700,f:0},104901:{a:6051E3,f:0},104902:{a:6051800,f:0},104903:{a:a.moon.radius,f:a.moon.flattening},104904:{a:3393400,f:.005207166853303471},104905:{a:a.mars.radius,f:a.mars.flattening},104906:{a:6200,f:0},104907:{a:11100,f:0},104908:{a:71492E3,f:.06487439154031222},
104909:{a:8200,f:0},104910:{a:83500,f:0},104911:{a:1E4,f:0},104912:{a:2409300,f:0},104913:{a:15E3,f:0},104914:{a:4E4,f:0},104915:{a:1562090,f:0},104916:{a:2632345,f:0},104917:{a:85E3,f:0},104918:{a:1821460,f:0},104919:{a:5E3,f:0},104920:{a:12E3,f:0},104921:{a:3E4,f:3},104922:{a:18E3,f:0},104923:{a:14E3,f:0},104924:{a:49300,f:0},104925:{a:60268E3,f:.09796243445941462},104926:{a:16E3,f:0},104927:{a:9500,f:0},104928:{a:56E4,f:0},104929:{a:249400,f:0},104930:{a:59500,f:0},104931:{a:16E3,f:0},104932:{a:133E3,
f:0},104933:{a:718E3,f:0},104934:{a:888E3,f:0},104935:{a:1986300,f:0},104936:{a:1E4,f:0},104937:{a:41900,f:0},104938:{a:11E4,f:0},104939:{a:50100,f:0},104940:{a:764E3,f:0},104941:{a:11E3,f:0},104942:{a:529800,f:0},104943:{a:2575E3,f:0},104944:{a:25559E3,f:.022927344575296365},104945:{a:578900,f:0},104946:{a:33E3,f:0},104947:{a:21E3,f:0},104948:{a:13E3,f:0},104949:{a:31E3,f:0},104950:{a:27E3,f:0},104951:{a:42E3,f:0},104952:{a:235800,f:0},104953:{a:761400,f:0},104954:{a:15E3,f:0},104955:{a:54E3,f:0},
104956:{a:77E3,f:0},104957:{a:27E3,f:0},104958:{a:788900,f:0},104959:{a:584700,f:0},104960:{a:24764E3,f:.01708124697141011},104961:{a:74E3,f:0},104962:{a:79E3,f:0},104963:{a:104E3,f:.14423076923076922},104964:{a:29E3,f:0},104965:{a:17E4,f:0},104966:{a:208E3,f:0},104967:{a:4E4,f:0},104968:{a:1352600,f:0},104969:{a:1195E3,f:0},104970:{a:593E3,f:0},104971:{a:a.mars.radius,f:0},104972:{a:47E4,f:0},104973:{a:255E3,f:0},104974:{a:2439400,f:0}};d.earthEllipsoidConstants={a1:c*b,a2:c*b*c*b,a3:c*b*b/2,a4:c*
b*c*b*2.5,a5:c*b+c*b*b/2,a6:1-b};d.spheroids=a;d.toRadians=e;d.wktSpheroidRegex=/(?:SPHEROID|ELLIPSOID)\[([^\]]+)]/i;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});