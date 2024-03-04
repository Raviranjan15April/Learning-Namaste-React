# Learning-Namaste-React
Namaste React By Akshay Saini


Episode-01:- Assignment
Emmet:-
Text editor plug-in improve HTML & CSS workflow.
Save both developer time as well as no of keystrokes.
Reduces Typo error, missing tag --> robust code.
Saved lot of time, increase performance, effectively programming. Typed Few character --> expand --> block of code

CDN:-
Content delivery network/ content distribution network.
Bunch of server place on the earth --> to minimise distance b/w websites and user.
	why using CDN is important:
Web performance --> reduces time to get content delivered to user.
User experience --> stay aways from website server
Delivered from neumours server --> more secure & less down time.
	how cdn works:
CDN management software dynamically calculate nearest server --> get the content delivered.
CDN edge server communicate to origin server --> get the content delivered --> cached that hasn't been.
CDN edge server reduces distance content tarvel, no of hop data package created --> less data package loss, improve bandwidth, improve performance, less latency & jitter, better user experience.
Website server is down --> available for user --> if cached properly
	how caching works:
Website server hosted at Chicago, user from Washington --> request for website
Received request -->origin server send response and send copy of request to CDN point of persence(POP)
CDN POP cached those response.
Next time same user or different user from same geographical area response from CDN.
	Difference b/w web host & CDN
Web host host the application other hand CDN cached the content.
Host all typed of data other hand CDN cached static data. 

Difference between Framework & Library:-
Framework:-
Provide structure for developing software application.
Collection of library based on particular methodology(mvc) which cover all area of application development.
Key difference "inversion of control" when you are calling any method from frame work the control is inverted the frame work call you.
Library:-
Used to perform specific task.
Focus on solving particular problem or specific area of application development.
Perform specific, well defined operation ex:- network protocols, image manipulations, regular expression evaluations etc.
Key difference "inversion of control" when we call method from any library you are in control 

Why is react know as react:-
Because of it's core feature. Which is react or respond dynamically to changes in data.
Library was build around the concept of unidirectional data flow. Where changes in data flow down through the component hierarchy, trigger updates and re-rendering as necessary.
It allow to developed user interfaces that are fast and responsive or reactive the library was designed to react to changes in data.

What is cross-origin in script tag:-
Purpose --> used to share the resource from one domain to another domain.
Used to handle CORS(cross origin resource sharing) request that check whether it is safe to allow for sharing the resouces from other domain
Rescue may includes audio, video, image, links or external script.
CORS mechanism by which one web pages request another domain for fetching out the resources from third party server without leaking their credential.
Two value --> anonymous: default value, defined CORS request which will send without passing their credential information.
	      user-credential: CORS request will send with credential, cookies and certificate.

What is difference b/w React and ReactDOM:-
React responsible for creating view & ReactDOM responsible for rendering UI in to browser.
ReactDom is glue between react and DOM. only used it for one things mounting your application in to index.html file with ReactDOM.render().
Reason of spilling React & ReactDOM is arrival of react native.

What is difference b/w react.development.js & react.production.js via CDN file:-
In production mode compression or magnification of javascript and other resources to reduces the size of the code in the other hand it doesn't happen.
Performance will be much faster in production mode when we compare to developer mode.
React.production.js: minified code that is not developer friendly, as it focus on decreasing the file size
React.developer.js: more developer friendly, readable and will take more size.	

Episode-02:-
Notes:-
git init:- local set to git reprojetry. configure the local project with remote reprojetry. by-default branch will be master.
git branch -M main(changes branch from default to main). 
git add.  (Add all file for commit)
git commit -m "message" (committing the code)
git remote add origin remotelink.  (Required to do only once to step our reprojetry to remote)
git push origin main (push all the code into main repojetry)

Note:- to make app for ready to production you have to do minified, compressed, image optimisation, bundling, chunking, code splitting etc.. before doing that
Npm doesn't stand for node package manager. npm Doesn't have full form. but Npm manages packages but doesn't stand for node package manages. All the library utility all those come from npm and npm manages those utility & library.
npm init :- to create package.json file. It is configuration for npm.  It will take care all the things like version, descriptions etc...
Package is only called dependency.
Bundler helps you to bundle/package your app so it can be shift to productions.
npm install -D parcel
Two type of dependency we can have in our app dev dependency(required for development phase) and normal dependency(in production phase as well as developement). 
^2.8.3 :- there it is called caret instead of this we can add tilde as well. Main difference is when we will put carrot then whenever any minor version updated it will automatically update it.  when we will put tilde then whenever any major version updated it will automatically update it. It is always safe to add carrot instead of tilde.

package.lock.json:- will lock(track) the version of dependency/package that we have installed.
node_modules:- contains all the code that we fetched from npm. That contains all the code for package/dependency.collection of dependency. Database where all the code of dependency is present.

Transitive dependency:- our project having some dependency(Parcel), our dependency(Parcel) as a project having their own dependency and those dependency having their own dependency this is known as transitive dependency.
Every dependency/package have their own package.json(configuration) and their own dependency.
.gitignore:- if you don't want to not put some code into git then you can put inside this file (.gitignore). Add like this /node_modules. Whatever we can regenerate that not required to put into git.like node_modules etc....

npx parcel index.html(source file of app).it will build the development build and host our app at port number localhost:1234
Npm command to install our dependency but npx command to execute a package. Ex:- npx parcel index.html
Note:- Adding react and react DOM in to our project we can do that in two ways:- 1. By using CDN links(disadvantages:- network call to get React and ReactDOM will be costly ways, if tomorrow react version will updated need to change the URL for the same. 2. Using the React and ReactDOM packages. Npm package are available for React and ReactDOM we can install it using npm. 
For React :-  npm install react
For ReactDOM:-  npm install react-dom.
After doing that we will get error that browser script doesn't have import. To resolve that we need to add type="module" in our script file.
And we need to import ReactDom from 'react-dom/client' otherwise it will give warning. 
 
Parcel will do below things for you:- 
Dev Build
Create Local server
HMR(Hot Module Replacement)
File watching algorithm(written in C++)
Caching- faster Builds
Image optimization
Magnification
Bundling
Compressing
Consistent Hashing
Code splitting 
Differential bundling- to support in older browser
Diagnostic
Error Handling
Host on Https
Tree shaking - remove unused code
	
Production build using parcel:- command: npx parcel build index.html
We will get error as in package.json file we have "main":App.js as here we are giving source file as index.html so we need to remove this then that error will go.
And production build be generated and placed inside the dist folder. There will be three file and it make take some seconds to build that.
It will give three file. html, css and javascript file.
.parcel-cache & dist file will get created automatically so not required to push these code in to git. Anything that can be regenerated not required to push into git.

Browserlist is the npm package using that you can handle that your website will work in which version of browser with out any issue. For that we need to add browser list package in our package.json file it will take array for list of browser.

Assignment-02
01. What is NPM
NPM are used to manages packages. Npm is one of the multiple package manager like yarn, Bower etc....
Npm is world's largest registry(library). Npm are used for share and borrow packages.
	NPM consist of three distinct component 
The website:- used to discover packages
The command line interface(CLI):- CLI runs from the terminal
The registry:- is a large public database of javascript software and meta information surrounding it.

02. What is parcel/webpack ? Why do we need it.
A bundler is a development tool that combines many javaScript code file in to a single one that is production ready loadable in to browser. 
Bundler are used to do below things.
	Transpiling Higher-level language in to HTML, CSS and JavaScript.
	Serving files on an ad-hoc HTTP server with live reloading.
	Preparing the application for production: minify, concatenate, uglify.
 
Parcel and webpack are the bundlers used mostly for javascript and typescript code that help you to minify, clean, and make your code compact so that it becomes easier to send a request and receive the response from the server without 

03. What is .parcel-cache.
.parcel-cache is a directory generated by parcel bundler(used to bundling & optimising web application). When parcel bundle your project it creates the .parcel-cache directory to store cached data.
The purpose of this cache directory to speedup subsequent build. Parcel analysed your project dependency, Transformations, and optimisation, and store result in to cache. This way if you make any changes to your cod and trigger a rebuild, parcel can quickly retrieve the cache data and only process the modified parts saving time and resources.
	why .parcel-cache is useful:-
i. Faster build
ii. Efficient Development workflow:- with the help of caching, parcel determine which part of the code required reprocessing allow the smoother development experience
iii. Reduce resource usages:- The cache minimise the utilisation of system resouces. Such as CPU and memory and it avoid unnecessary operation during subsequent builds.
".parcel-cache` is a directory generated by the Parcel bundler, serving as a cache for storing intermediate build results. It enhances the development workflow by speeding up subsequent builds and optimising resource usage."
     
04. What is npx.
It is basically NPM runner which allow to executes/run any javascript package without installing it.

05. What is difference between dependency and dev dependency.
All the package/dependency that are required during it's development phase but not in production phase is called dev dependency.
	syntax to add dev dependency:- npm install packageName --save-dev

All the package/dependency that are required to run project is called dependency.
	syntax to add dev dependency:- npm install packageName 

06. What is tree shaking.
Tree shaking means removal of dead code. It means unused modules will not be included in bundle during the build process.
	when we import and export module in javascript, most of the time there is unused code floating around. Excluding that unused code(also refer as dead code) is called tree shaking.
After Using tree shaking size of app(code) will reduce. Due to this(small build size) performance will increase.
It only work with import and export. It won't work with commonJs required syntax.

07. What is hot module replacement.
When any changes detects, Instead of reloading entire application. It only replace the module that have been changes without loading the application or refreshing the browser.
	this speed up development as.
a. It save up development time by only updating what has changed.
b. It retains the state of the application which is normally lost during the full reload.
	the Modules here refers to javaScript files.

Web pack provides two components to make HMR possible 
a. HMR runtime.
b. HMR server(included in webpack-dev-server as middlewere)

HMR runtimes already installed in to output bundle(application) that web pack generates. HMR runtime is extra piece of code that webpack add 
in output bundle. This piece of code(HMR runtime) is responsible for receiving the module updates in your code.
The webpack compiler informs the HMR server when update is made. Then HMR server then notified the HMR runtime that an update has occurred and it provides those updates to the runtime in json format.
	Below is the way how HMR happen.
a. You make a changes in one of the file.
b. The file system picks up the changes and inform to webpack.
c. The webpack compiler rebuilds one or more modules and notified the HMR server that an update has been made.
d. The HMR server use websocket to inform HMR runtime that an update has been made in code that runtime need to pull the update and replace the respective module.
e. The HMR runtime then replace the module in the update.

	How does we used in our application.
A module can be only updated if you 'accept' it.
	what does it mean for module to be accepted.
Webpack have API that user needs to use for HMR module.hot.accept().

08. what is .gitignore file ? what should be add and not add into it
.gitignore tell git which file it should ignore. It usually used to avoid committing transient file from the work directory that are not useful. 

09. What is difference between package.json and package-lock.json.
package.json:- it is automatically generated and updated by npm. It can be edited manually. contains the version of the package/dependency along with caret and tilde.
package-lock.json:- contains the exact version of the installed package/dependency.

10. Why should i not modify package-lock.json.
Lock file should not be modified unless you are actively updating the packages required.

11. What is node_module ? Is it a good idea to push that on git.
node_module is directory created by npm to keep all the code we fetch from npm. node_module is database that contains all the code for package/dependency.

12. What is dist folder
Dist stand for distributable. Dist folder contains the minimized version of source code.
The code present in the dist folder is actually the code which is used production.
It is easy to created dist folder as it is created automatic when we will build project.

13. What is browser list.
Browserlist is the configuration that determine which browser your project should support. We can configure it in package.json file like below.

"browserslist": {
  "production": [
    ">0.2%",
    "not dead",
    "not op_mini all"
  ],
  "development": [
    "last 1 chrome version",
    "last 1 firefox version",
    "last 1 safari version"
  ]
}

This configuration specified that in production 
	the project should support browser with a global usages of more than 0.2%,
	excluding any browser that is dead.
	excludes op_mini rendering engines.

14. What is difference between caret(^) and tilde(~) in package.json
Main difference is when we will put carrot then whenever any minor version updated it will automatically update it.  when we will put tilde then whenever any major version updated it will automatically update 
caret(^):- will update you to all future minor/patch versions, without incrementing the major version. ^1.2.3 will use releases from 1.2.3 to <2.0.0.
tilde(~):- will update you to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.

Episode-03:-
Notes:-
We can create script for building the app for development and production build. For that in package.json file inside the script we can create the script by passing the key value pair like :- 
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "jest"
  },
And we can use this script like npm run start/npm run build for development build and prod build respectively.

Note:- we can write npm run start as npm start, but this will work only npm run start. If you will do npm build they it will not work. 

Note:- React element is nothing but javascript object when we will render it on browser(DOM). Then it will get converted in to the html element. And it will replace everything in side the root element.

Creating react element by using React.createlement is not feasible for big/complex application. So Facebook developer came with the developer friendly way to create that. That is called jsx, JSX is javascript syntax. JSX is not html inside the javascript. It is html like/xml like syntax.

Javascript engines understand only javascript ECMASCRIPT , but it will not understand JSX that's why We need to transpile the JSX before 
Giving to javascript engines. 

Transpile:- converted the code that javascript engines will understand.
Babel is responsible for transpiling the JSX. Actually using babel converting jsx code in to React.createElement and it is nothing but just a javascript object and while rendering it it will convert in to  HTML Element.
Note:- in react class is keyword so instead of class we need to give className.if you are writing multiline JSX then you have to wrap it with parenthesis.So transpiler(babel) will understand from where JSX is started and where it's end.

JSX =>Babel transpire it to React.createElement =>React Element ->JavaScript Object =>HTML Element(while Rendering)
While adding attribute in JSX we need to give attribute name in camel case.

Component:- we can create a component in two ways. 1. Class based component 2. Functional component.
Functional Component:- it is just a normal javascript functions that will return some JSX/or return React element.
Note:- while creating a component in react  component name should always start with capital letter.
While rendering the react element we can pass react element in to render method. But while rendering the react component we need to pass react component as a HTML tag inside the render method.
Rendering react element:- root.render(reactElement)
Rendering react component:- root.render(<reactElement/>)

Component compositions:- When we will compose two component in to each other is called component composition. Basically when we are rendering one component in to another and at the end render that component in to root is called component composition.

Note:- you can use normal function for creating react component. There is no hard and fast rule that we need to use arrow function for creating component. 

Note:- Inside the jsx we can do any javascript operation(can put any expression) but only you need to wrap with curly braces.

Note:- Suppose we are getting data from some API. That API will give malicious data. But jsx will sanitise that data before processing.so Jsx will save from cross side Attack.

Assignment-03
