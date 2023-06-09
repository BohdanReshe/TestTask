# AVAMAE

## APP SOFTWARE ENGINEER TEST

### Description

The aim of the challenge is to replicate the design as faithfully as possible. Here are references:

* [Desktop] (https://invis.io/92U5LEC4HFW)
* [Mobile] (https://invis.io/7HU5N51T4US)

Please pay attention that there is no tablet responsive design.

## How to open

* For view. Application was uploaded to the site https://www.bohdanr.great-site.net/ on 09 of June 2023. Please note that the browser may warn about SSL.
* Code review. **Dev** version. https://github.com/BohdanReshe/TestTask.git 
* Code review. **Prod** version (This version was uploaded to the site above). https://github.com/BohdanReshe/TestTaskBuild.git

# Message

##  The task was completed in accordance with the requirements regarding the use of a specific set of techniques and programming languages.:

* SPA
* Most recent version of React. UseHook
* HTML, CSS, JavaScript (+jQuery)
* Bundled and minified with Create React App
* API GET for carousel and API POST for contact form
* Avoiding styling frameworks
* Three routes:
```
	<Route path="/" exact element={<Home/>} /> 
	<Route path="/contact-us" element={<Contact />} /> 
	<Route path="/about-us" element={<About />} />
```

## Implemented the following recommendations:

* Swiper for carousel
* React Router
* Formik (+Yup for validationSchema)
* Axios for API

#### Additional information.

Thank you for assigning me this task. I enjoyed working on this solution. The challenge was created with great attention to detail, making it versatile in terms of logic and appearance. These aspects became apparent only upon completion of the task. I have some thoughts and observations that I would like to share with you:

* The photos for the carousel API are too large, ranging from 10-15MB in size. Although I added the attribute lazy loading to the swiper slide, it still slows down the loading time. If I were working on this project, I would request the server-side to resize the photos for faster loading.
* For precise colors I used picker “Digital Colour Meter” on Mac.
* The Validation Schema operates based on criteria such as optional fields, character limits, data absence, and proper formatting for email and UK postcodes.
* An error message has been added to the contact form to alert users of unsuccessful API POST attempts. Conversely, a success message will appear when the server's response message shows "status:200".

Kind regards,
Bohdan