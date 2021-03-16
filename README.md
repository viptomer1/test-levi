
# Shoping Grid with pagination /responsive grid:/ Product descripton with Image carousal

- 👋 Hi, 
- 👀 I’m using below tech for this project..

Before going in details please have a look (TO check responsive grid , change page limit in <b>res/constant.js</b> file to pagination page/total pages)

<a href="https://viptomer1.github.io/">Demo Product grid & Pagination</a>

- IF SERVICE FAILED THEN IT WILL SHOW STATIC DATA 

![image](https://user-images.githubusercontent.com/80127823/111080259-906f4f80-84f5-11eb-9330-2c7cd55b39ca.png)
![image](https://user-images.githubusercontent.com/80127823/111165213-ad0f9400-8596-11eb-9bc8-5ccd1c514c41.png)
![image](https://user-images.githubusercontent.com/80127823/111165310-c9abcc00-8596-11eb-8a77-6af4eaa407df.png)

![image](https://user-images.githubusercontent.com/80127823/111165473-f8c23d80-8596-11eb-8f7b-c3433adcdd21.png)



# Architecture:


- Library - Reactjs (Used for creating app and router only) - to save time :)
- Test automation - Jest (Used for test)
- All components - Javascript/css (Everything else is pure Js & css)<br>

- I have decided to use a popular libraray Reactjs to create this project. If we create this project in plain js then we have to make multiple controls for screen flow and data flow which we can use from these Js frameworks without writing them.<br>

I have created component using Js & css instead of using <b>React component</b>. React components are very easy instead.

I can make this app in serveral way like using Angular or Jquery or even using other Js frameworking but decided to use react as this is something I am learning now and it will give me handson experience as well as exponse my learnings along with this assignment:)



Created react app(test-levi) first simply as we need to create product screen flow hence using react so that we can flow data between screens.
<br>Even react app will provide native features for different plateforms as well.


<br><br>
- push the branch as master first and will use <b>'release'</b> branch further for adding feature.
- <b>master >> release</b>

# test-levi (app name)
Once create the react app using : 
- npx create-react-app test-levi<br>
install the router module as it would be needed to use to pages routing back/for
- npm i -g react-router-dom 

# Creating two pages Home(ProductList) > Product Description:<br>

Home page would be having Product component to show in grid and Product page will be showing Product description.

# TDD
I have created basic tests like first test for loading app header and then one by one to load component.
<br> So these would be failing until App will loaded properly and load Product title successfully.

-test are covering basic component loading and if blank value provided like no product are passing then title will show 0 items in header

- Test 1: App load home - 'Product title'<br>
Test 2: Load product list - 'Product count shown'<br>
Test 3: Product selected - 'Product selected and switch to desc view'<br>
Test 4: Product description - 'Product description'<br>

 - Finally, thanks for reviewing this page
 - I have created Home screen with nested components but Product screen is little plain in terms of components<br>
 - (Please consider Home as well structured code and similar Components should be used in Product screen too)
 - same )


