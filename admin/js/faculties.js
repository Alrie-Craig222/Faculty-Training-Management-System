// import { supabase } from '../../src/supabase.js';

// /**
// * Template Name: NiceAdmin
// * Updated: Nov 17 2023 with Bootstrap v5.3.2
// * Template URL: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/
// * Author: BootstrapMade.com
// * License: https://bootstrapmade.com/license/
// */
// (function() {
//   "use strict";

//   /**
//    * Easy selector helper function
//    */
//   const select = (el, all = false) => {
//     el = el.trim()
//     if (all) {
//       return [...document.querySelectorAll(el)]
//     } else {
//       return document.querySelector(el)
//     }
//   }

//   /**
//    * Easy event listener function
//    */
//   const on = (type, el, listener, all = false) => {
//     if (all) {
//       select(el, all).forEach(e => e.addEventListener(type, listener))
//     } else {
//       select(el, all).addEventListener(type, listener)
//     }
//   }

//   /**
//    * Easy on scroll event listener 
//    */
//   const onscroll = (el, listener) => {
//     el.addEventListener('scroll', listener)
//   }

//   /**
//    * Sidebar toggle
//    */
//   if (select('.toggle-sidebar-btn')) {
//     on('click', '.toggle-sidebar-btn', function(e) {
//       select('body').classList.toggle('toggle-sidebar')
//     })
//   }

//   /**
//    * Search bar toggle
//    */
//   if (select('.search-bar-toggle')) {
//     on('click', '.search-bar-toggle', function(e) {
//       select('.search-bar').classList.toggle('search-bar-show')
//     })
//   }

//   /**
//    * Navbar links active state on scroll
//    */
//   let navbarlinks = select('#navbar .scrollto', true)
//   const navbarlinksActive = () => {
//     let position = window.scrollY + 200
//     navbarlinks.forEach(navbarlink => {
//       if (!navbarlink.hash) return
//       let section = select(navbarlink.hash)
//       if (!section) return
//       if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
//         navbarlink.classList.add('active')
//       } else {
//         navbarlink.classList.remove('active')
//       }
//     })
//   }
//   window.addEventListener('load', navbarlinksActive)
//   onscroll(document, navbarlinksActive)

//   /**
//    * Toggle .header-scrolled class to #header when page is scrolled
//    */
//   let selectHeader = select('#header')
//   if (selectHeader) {
//     const headerScrolled = () => {
//       if (window.scrollY > 100) {
//         selectHeader.classList.add('header-scrolled')
//       } else {
//         selectHeader.classList.remove('header-scrolled')
//       }
//     }
//     window.addEventListener('load', headerScrolled)
//     onscroll(document, headerScrolled)
//   }

//   /**
//    * Back to top button
//    */
//   let backtotop = select('.back-to-top')
//   if (backtotop) {
//     const toggleBacktotop = () => {
//       if (window.scrollY > 100) {
//         backtotop.classList.add('active')
//       } else {
//         backtotop.classList.remove('active')
//       }
//     }
//     window.addEventListener('load', toggleBacktotop)
//     onscroll(document, toggleBacktotop)
//   }

//   /**
//    * Initiate tooltips
//    */
//   var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
//   var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
//     return new bootstrap.Tooltip(tooltipTriggerEl)
//   })

//   /**
//    * Initiate quill editors
//    */
//   if (select('.quill-editor-default')) {
//     new Quill('.quill-editor-default', {
//       theme: 'snow'
//     });
//   }

//   if (select('.quill-editor-bubble')) {
//     new Quill('.quill-editor-bubble', {
//       theme: 'bubble'
//     });
//   }

//   if (select('.quill-editor-full')) {
//     new Quill(".quill-editor-full", {
//       modules: {
//         toolbar: [
//           [{
//             font: []
//           }, {
//             size: []
//           }],
//           ["bold", "italic", "underline", "strike"],
//           [{
//               color: []
//             },
//             {
//               background: []
//             }
//           ],
//           [{
//               script: "super"
//             },
//             {
//               script: "sub"
//             }
//           ],
//           [{
//               list: "ordered"
//             },
//             {
//               list: "bullet"
//             },
//             {
//               indent: "-1"
//             },
//             {
//               indent: "+1"
//             }
//           ],
//           ["direction", {
//             align: []
//           }],
//           ["link", "image", "video"],
//           ["clean"]
//         ]
//       },
//       theme: "snow"
//     });
//   }

//   /**
//    * Initiate TinyMCE Editor
//    */
//   const useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
//   const isSmallScreen = window.matchMedia('(max-width: 1023.5px)').matches;

//   tinymce.init({
//     selector: 'textarea.tinymce-editor',
//     plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
//     editimage_cors_hosts: ['picsum.photos'],
//     menubar: 'file edit view insert format tools table help',
//     toolbar: 'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
//     toolbar_sticky: true,
//     toolbar_sticky_offset: isSmallScreen ? 102 : 108,
//     autosave_ask_before_unload: true,
//     autosave_interval: '30s',
//     autosave_prefix: '{path}{query}-{id}-',
//     autosave_restore_when_empty: false,
//     autosave_retention: '2m',
//     image_advtab: true,
//     link_list: [{
//         title: 'My page 1',
//         value: 'https://www.tiny.cloud'
//       },
//       {
//         title: 'My page 2',
//         value: 'http://www.moxiecode.com'
//       }
//     ],
//     image_list: [{
//         title: 'My page 1',
//         value: 'https://www.tiny.cloud'
//       },
//       {
//         title: 'My page 2',
//         value: 'http://www.moxiecode.com'
//       }
//     ],
//     image_class_list: [{
//         title: 'None',
//         value: ''
//       },
//       {
//         title: 'Some class',
//         value: 'class-name'
//       }
//     ],
//     importcss_append: true,
//     file_picker_callback: (callback, value, meta) => {
//       /* Provide file and text for the link dialog */
//       if (meta.filetype === 'file') {
//         callback('https://www.google.com/logos/google.jpg', {
//           text: 'My text'
//         });
//       }

//       /* Provide image and alt text for the image dialog */
//       if (meta.filetype === 'image') {
//         callback('https://www.google.com/logos/google.jpg', {
//           alt: 'My alt text'
//         });
//       }

//       /* Provide alternative source and posted for the media dialog */
//       if (meta.filetype === 'media') {
//         callback('movie.mp4', {
//           source2: 'alt.ogg',
//           poster: 'https://www.google.com/logos/google.jpg'
//         });
//       }
//     },
//     templates: [{
//         title: 'New Table',
//         description: 'creates a new table',
//         content: '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>'
//       },
//       {
//         title: 'Starting my story',
//         description: 'A cure for writers block',
//         content: 'Once upon a time...'
//       },
//       {
//         title: 'New list with dates',
//         description: 'New List with dates',
//         content: '<div class="mceTmpl"><span class="cdate">cdate</span><br><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>'
//       }
//     ],
//     template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
//     template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
//     height: 600,
//     image_caption: true,
//     quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
//     noneditable_class: 'mceNonEditable',
//     toolbar_mode: 'sliding',
//     contextmenu: 'link image table',
//     skin: useDarkMode ? 'oxide-dark' : 'oxide',
//     content_css: useDarkMode ? 'dark' : 'default',
//     content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
//   });

//   /**
//    * Initiate Bootstrap validation check
//    */
//   var needsValidation = document.querySelectorAll('.needs-validation')

//   Array.prototype.slice.call(needsValidation)
//     .forEach(function(form) {
//       form.addEventListener('submit', function(event) {
//         if (!form.checkValidity()) {
//           event.preventDefault()
//           event.stopPropagation()
//         }

//         form.classList.add('was-validated')
//       }, false)
//     })

//   /**
//    * Initiate Datatables
//    */
//   const datatables = select('.datatable', true)
//   datatables.forEach(datatable => {
//     new simpleDatatables.DataTable(datatable, {
//       perPageSelect: [5, 10, 15, ["All", -1]],
//       columns: [{
//           select: 2,
//           sortSequence: ["desc", "asc"]
//         },
//         {
//           select: 3,
//           sortSequence: ["desc"]
//         },
//         {
//           select: 4,
//           cellClass: "green",
//           headerClass: "red"
//         }
//       ]
//     });
//   })

//   /**
//    * Autoresize echart charts
//    */
//   const mainContainer = select('#main');
//   if (mainContainer) {
//     setTimeout(() => {
//       new ResizeObserver(function() {
//         select('.echart', true).forEach(getEchart => {
//           echarts.getInstanceByDom(getEchart).resize();
//         })
//       }).observe(mainContainer);
//     }, 200);
//   }

// })();

// // var form = document.getElementById("myForm"),
// //     imgInput = document.querySelector(".img"),
// //     file = document.getElementById("imgInput"),
// //     userName = document.getElementById("name"),
// //     email = document.getElementById("email"),
// //     phone = document.getElementById("phone"),
// //     hour = document.getElementById("hour"),
// //     type = document.getElementById("type"),
// //     submitBtn = document.querySelector(".submit"),
// //     userInfo = document.getElementById("data"),
// //     modal = document.getElementById("userForm"),
// //     modalTitle = document.querySelector("#userForm .modal-title"),
// //     newUserBtn = document.querySelector(".newUser")


// // let getData = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : []

// // let isEdit = false, editId
// // showInfo()

// // newUserBtn.addEventListener('click', ()=> {
// //     submitBtn.innerText = 'Submit',
// //     modalTitle.innerText = "Fill the Form"
// //     isEdit = false
// //     imgInput.src = "Profile Icon.png"
// //     form.reset()
// // })


// // file.onchange = function(){
// //     if(file.files[0].size < 1000000){ // 1MB = 1000000
// //         var fileReader = new FileReader();

// //         fileReader.onload = function(e){
// //             imgUrl = e.target.result
// //             imgInput.src = imgUrl
// //         }

// //         fileReader.readAsDataURL(file.files[0])
// //     }
// //     else{
// //         alert("This file is too large!")
// //     }
// // }


// // function showInfo(){
// //     document.querySelectorAll('.employeeDetails').forEach(info => info.remove())
// //     getData.forEach((element, index) => {
// //         let createElement = `<tr class="employeeDetails">
// //             <td>${index+1}</td>
// //             <td><img src="${element.picture}" alt="" width="50" height="50"></td>
// //             <td>${element.employeeName}</td>
// //             <td>${element.employeeEmail}</td>
// //             <td>${element.employeePhone}</td>
// //             <td>${element.employeeHour}</td>
// //             <td>${element.employeeType}</td>

// //             <td>
// //                 <button class="btn btn-success" onclick="readInfo('${element.picture}', '${element.employeeName}', '${element.employeeEmail}', '${element.employeePhone}', '${element.employeeHour}', '${element.employeeType}')" data-bs-toggle="modal" data-bs-target="#readData"><i class="bi bi-eye"></i></button>

// //                 <button class="btn btn-primary" onclick="editInfo(${index}, '${element.picture}', '${element.employeeName}', '${element.employeeEmail}', '${element.employeePhone}', '${element.employeeHour}', '${element.employeeType}')" data-bs-toggle="modal" data-bs-target="#userForm"><i class="bi bi-pencil-square"></i></button>

// //                 <button class="btn btn-danger" onclick="deleteInfo(${index})"><i class="bi bi-trash"></i></button>
                            
// //             </td>
// //         </tr>`

// //         userInfo.innerHTML += createElement
// //     })
// // }
// // showInfo()


// // function readInfo(pic, name, email, phone, hour, type, sDate){
// //     document.querySelector('.showImg').src = pic,
// //     document.querySelector('#showName').value = name,
// //     document.querySelector("#showEmail").value = email,
// //     document.querySelector("#showPhone").value = phone,
// //     document.querySelector("#showHour").value = hour,
// //     document.querySelector("#showType").value = type,
// //     document.querySelector("#showsDate").value = sDate
// // }


// // function editInfo(index, pic, name, Email, Phone, Hour, Type){
// //     isEdit = true
// //     editId = index
// //     imgInput.src = pic
// //     userName.value = name
// //     email.value = Email,
// //     phone.value = Phone,
// //     hour.value = Hour,
// //     type.value = Type

// //     submitBtn.innerText = "Update"
// //     modalTitle.innerText = "Update The Form"
// // }


// // function deleteInfo(index){
// //     if(confirm("Are you sure want to delete?")){
// //         getData.splice(index, 1)
// //         localStorage.setItem("userProfile", JSON.stringify(getData))
// //         showInfo()
// //     }
// // }


// // form.addEventListener('submit', (e)=> {
// //     e.preventDefault()

// //     const information = {
// //         picture: imgInput.src == undefined ? "Profile Icon.png" : imgInput.src,
// //         employeeName: userName.value,
// //         employeeEmail: email.value,
// //         employeePhone: phone.value,
// //         employeeHour: hour.value,
// //         employeeType: type.value,
       
// //     }

// //     if(!isEdit){
// //         getData.push(information)
// //     }
// //     else{
// //         isEdit = false
// //         getData[editId] = information
// //     }

// //     localStorage.setItem('userProfile', JSON.stringify(getData))

// //     submitBtn.innerText = "Submit"
// //     modalTitle.innerHTML = "Fill The Form"

// //     showInfo()

// //     form.reset()

// //     imgInput.src = "Profile Icon.png"  

// //     // modal.style.display = "none"
// //     // document.querySelector(".modal-backdrop").remove()

    
// // })


// const form = document.getElementById("myForm");
// const imgPreview = document.querySelector(".img");
// const imgInput = document.getElementById("imgInput");
// const firstNameInput = document.getElementById("name");
// const lastNameInput = document.getElementById("lastName"); // Renamed for accuracy
// const emailInput = document.getElementById("email");
// const phoneInput = document.getElementById("hour");
// const dateJoinedInput = document.getElementById("type");
// const submitBtn = document.querySelector(".submit");
// const userInfo = document.getElementById("data");
// const modalTitle = document.querySelector("#userForm .modal-title");

// let isEdit = false, editId;

// // Load data when the document is ready
// document.addEventListener("DOMContentLoaded", fetchUserData);
// submitBtn.addEventListener('click', handleSubmit);

// // Fetch and display faculty data from Supabase
// async function fetchUserData() {
//     const { data, error } = await supabase.from('faculty').select('*');
//     if (error) {
//         console.error("Error fetching data:", error);
//         return;
//     }
//     userInfo.innerHTML = '';
//     data.forEach((user, index) => {
//         userInfo.innerHTML += createTableRow(user, index);
//     });
// }

// // Handle form submission (create or update)
// async function handleSubmit(e) {
//     e.preventDefault();
//     const userData = {
//         picture: imgPreview.src || "assets/img/picon.png",
//         first_name: firstNameInput.value,
//         last_name: lastNameInput.value,
//         email: emailInput.value,
//         phone: phoneInput.value,
//         date_joined: dateJoinedInput.value,
//     };

//     if (isEdit) {
//         // Update existing data
//         const { error } = await supabase
//             .from('faculty')
//             .update(userData)
//             .eq('id', editId);
//         if (error) {
//             console.error("Error updating data:", error);
//             return;
//         }
//     } else {
//         // Insert new data
//         const { error } = await supabase
//             .from('faculty')
//             .insert([userData]);
//         if (error) {
//             console.error("Error inserting data:", error);
//             return;
//         }
//     }

//     form.reset();
//     imgPreview.src = "assets/img/picon.png"; // Reset preview
//     isEdit = false;
//     await fetchUserData();
// }

// // Populate form for editing
// async function editUser(userId) {
//     isEdit = true;
//     editId = userId;
//     const { data, error } = await supabase
//         .from('faculty')
//         .select('*')
//         .eq('id', userId)
//         .single();
//     if (error) {
//         console.error("Error fetching user:", error);
//         return;
//     }

//     imgPreview.src = data.picture || "assets/img/picon.png";
//     firstNameInput.value = data.first_name;
//     lastNameInput.value = data.last_name;
//     emailInput.value = data.email;
//     phoneInput.value = data.phone;
//     dateJoinedInput.value = data.date_joined;
//     modalTitle.innerText = "Update Faculty";
// }

// // Delete user data
// async function deleteUser(userId) {
//     if (confirm("Are you sure you want to delete this faculty member?")) {
//         const { error } = await supabase
//             .from('faculty')
//             .delete()
//             .eq('id', userId);
//         if (error) {
//             console.error("Error deleting user:", error);
//             return;
//         }
//         await fetchUserData();
//     }
// }

// // Create HTML for each table row
// function createTableRow(user, index) {
//     return `
//         <tr>
//             <td>${index + 1}</td>
//             <td><img src="${user.picture}" alt="Profile Picture" width="50" height="50"></td>
//             <td>${user.first_name}</td>
//             <td>${user.last_name}</td>
//             <td>${user.email}</td>
//             <td>${user.phone}</td>
//             <td>${user.date_joined}</td>
//             <td>
//                 <button class="btn btn-primary" onclick="editUser(${user.id})">Edit</button>
//                 <button class="btn btn-danger" onclick="deleteUser(${user.id})">Delete</button>
//             </td>
//         </tr>
//     `;
// }
