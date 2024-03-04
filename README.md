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


