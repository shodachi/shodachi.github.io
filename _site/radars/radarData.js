//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'Adopted'}
                  ,{'r':200,'name':'Trying'}
                  ,{'r':300,'name':'Will try'}
                  ,{'r':400,'name':'Hold '}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.


var h = 1000;
var w = 1200;

var radar_data = [
    { "quadrant": "Techniques",
        "left" : 25,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [ 
            {"name":"Deployment pipeline", "pc":{"r":30,"t":100},"movement":"c"},
            {"name":"Post-mortems", "pc":{"r":50,"t":135},"movement":"c"},
            {"name":"'Scrum'", "pc":{"r":80,"t":160},"movement":"c"},
            {"name":"Pair programing", "pc":{"r":120,"t":175},"movement":"c"},
            {"name":"Continuous Delivery", "pc":{"r":140,"t":110},"movement":"c"},
            {"name":"Growsmethod http://growsmethod.com/", "pc":{"r":210,"t":130},"movement":"c"},
            {"name":"Blue-green deployement", "pc":{"r":150,"t":110},"movement":"c"},
            {"name":"XP", "pc":{"r":300,"t":150},"movement":"c"},
            {"name":"Canary release", "pc":{"r":320,"t":120},"movement":"c"},
            {"name":"Machine learning", "pc":{"r":340,"t":130},"movement":"c"}

        ]
    },
    { "quadrant": "Tools",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [ 
            {"name":"Jenkins", "pc":{"r":40,"t":15},"movement":"c"},
            {"name":"Ansible", "pc":{"r":90,"t":45},"movement":"c"},
            {"name":"Rundeck", "pc":{"r":100,"t":60},"movement":"c"},
            {"name":"IntelliJ", "pc":{"r":110,"t":75},"movement":"c"},
            {"name":"Go.cd", "pc":{"r":120,"t":30},"movement":"c"},
            {"name":"Rabbitmq", "pc":{"r":200,"t":45},"movement":"c"},
            {"name":"Thirft", "pc":{"r":210,"t":60},"movement":"c"},
            {"name":"Hadoop", "pc":{"r":300,"t":75},"movement":"c"},
            {"name":"Spark", "pc":{"r":300,"t":20},"movement":"c"}
        ]
    },
    { "quadrant": "Platforms",
        "left" :25,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
            {"name":"Cloud Foundry", "pc":{"r":40,"t":225},"movement":"c"},
            {"name":"Android", "pc":{"r":70,"t":250},"movement":"c"},
            {"name":"Openstack", "pc":{"r":100,"t":260},"movement":"c"},
            {"name":"iOS", "pc":{"r":120,"t":225},"movement":"c"},
            {"name":"MacOS X", "pc":{"r":140,"t":260},"movement":"c"}

        ]
    },
    { "quadrant": "Languages & Frameworks",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [ 
            {"name":"Java", "pc":{"r":50,"t":315},"movement":"c"},
            {"name":"Ruby", "pc":{"r":70,"t":330},"movement":"c"},
            {"name":"Python", "pc":{"r":100,"t":350},"movement":"c"},
            {"name":"Scala", "pc":{"r":210,"t":315},"movement":"c"},
            {"name":"Swift", "pc":{"r":210,"t":330},"movement":"c"},
            {"name":"Haskell", "pc":{"r":310,"t":350},"movement":"c"}
        ]
    }
];
