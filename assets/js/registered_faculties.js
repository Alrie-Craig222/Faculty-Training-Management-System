import { supabase } from '../../src/supabase.js';

/**
* Template Name: NiceAdmin
* Updated: Nov 17 2023 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener))
    } else {
      select(el, all).addEventListener(type, listener)
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Sidebar toggle
   */
  if (select('.toggle-sidebar-btn')) {
    on('click', '.toggle-sidebar-btn', function(e) {
      select('body').classList.toggle('toggle-sidebar')
    })
  }

 

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Initiate tooltips
   */
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  /**
   * Initiate quill editors
   */
  if (select('.quill-editor-default')) {
    new Quill('.quill-editor-default', {
      theme: 'snow'
    });
  }

  if (select('.quill-editor-bubble')) {
    new Quill('.quill-editor-bubble', {
      theme: 'bubble'
    });
  }

  if (select('.quill-editor-full')) {
    new Quill(".quill-editor-full", {
      modules: {
        toolbar: [
          [{
            font: []
          }, {
            size: []
          }],
          ["bold", "italic", "underline", "strike"],
          [{
              color: []
            },
            {
              background: []
            }
          ],
          [{
              script: "super"
            },
            {
              script: "sub"
            }
          ],
          [{
              list: "ordered"
            },
            {
              list: "bullet"
            },
            {
              indent: "-1"
            },
            {
              indent: "+1"
            }
          ],
          ["direction", {
            align: []
          }],
          ["link", "image", "video"],
          ["clean"]
        ]
      },
      theme: "snow"
    });
  }

  /**
   * Initiate TinyMCE Editor
   */
  const useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isSmallScreen = window.matchMedia('(max-width: 1023.5px)').matches;

  tinymce.init({
    selector: 'textarea.tinymce-editor',
    plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
    editimage_cors_hosts: ['picsum.photos'],
    menubar: 'file edit view insert format tools table help',
    toolbar: 'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
    toolbar_sticky: true,
    toolbar_sticky_offset: isSmallScreen ? 102 : 108,
    autosave_ask_before_unload: true,
    autosave_interval: '30s',
    autosave_prefix: '{path}{query}-{id}-',
    autosave_restore_when_empty: false,
    autosave_retention: '2m',
    image_advtab: true,
    link_list: [{
        title: 'My page 1',
        value: 'https://www.tiny.cloud'
      },
      {
        title: 'My page 2',
        value: 'http://www.moxiecode.com'
      }
    ],
    image_list: [{
        title: 'My page 1',
        value: 'https://www.tiny.cloud'
      },
      {
        title: 'My page 2',
        value: 'http://www.moxiecode.com'
      }
    ],
    image_class_list: [{
        title: 'None',
        value: ''
      },
      {
        title: 'Some class',
        value: 'class-name'
      }
    ],
    importcss_append: true,
    file_picker_callback: (callback, value, meta) => {
      /* Provide file and text for the link dialog */
      if (meta.filetype === 'file') {
        callback('https://www.google.com/logos/google.jpg', {
          text: 'My text'
        });
      }

      /* Provide image and alt text for the image dialog */
      if (meta.filetype === 'image') {
        callback('https://www.google.com/logos/google.jpg', {
          alt: 'My alt text'
        });
      }

      /* Provide alternative source and posted for the media dialog */
      if (meta.filetype === 'media') {
        callback('movie.mp4', {
          source2: 'alt.ogg',
          poster: 'https://www.google.com/logos/google.jpg'
        });
      }
    },
    templates: [{
        title: 'New Table',
        description: 'creates a new table',
        content: '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>'
      },
      {
        title: 'Starting my story',
        description: 'A cure for writers block',
        content: 'Once upon a time...'
      },
      {
        title: 'New list with dates',
        description: 'New List with dates',
        content: '<div class="mceTmpl"><span class="cdate">cdate</span><br><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>'
      }
    ],
    template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
    template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
    height: 600,
    image_caption: true,
    quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
    noneditable_class: 'mceNonEditable',
    toolbar_mode: 'sliding',
    contextmenu: 'link image table',
    skin: useDarkMode ? 'oxide-dark' : 'oxide',
    content_css: useDarkMode ? 'dark' : 'default',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
  });

  /**
   * Initiate Bootstrap validation check
   */
  var needsValidation = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(needsValidation)
    .forEach(function(form) {
      form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })

  /**
   * Initiate Datatables
   */
  const datatables = select('.datatable', true)
  datatables.forEach(datatable => {
    new simpleDatatables.DataTable(datatable, {
      perPageSelect: [5, 10, 15, ["All", -1]],
      columns: [{
          select: 2,
          sortSequence: ["desc", "asc"]
        },
        {
          select: 3,
          sortSequence: ["desc"]
        },
        {
          select: 4,
          cellClass: "green",
          headerClass: "red"
        }
      ]
    });
  })

  /**
   * Autoresize echart charts
   */
  const mainContainer = select('#main');
  if (mainContainer) {
    setTimeout(() => {
      new ResizeObserver(function() {
        select('.echart', true).forEach(getEchart => {
          echarts.getInstanceByDom(getEchart).resize();
        })
      }).observe(mainContainer);
    }, 200);
  }

})();

// const form = document.getElementById("myForm");
// const faculty_idInput = document.getElementById("faculty_id");
// const faculty_nameInput = document.getElementById("faculty_name");
// const training_idInput = document.getElementById("training_id");
// const training_titleInput = document.getElementById("training_title");
// const start_dateInput = document.getElementById("start_date");
// const end_dateInput = document.getElementById("end_date");
// // const registration_dateInput = document.getElementById("registration_date");
// const userInfo = document.getElementById("data");


// let isEdit = false, editId;

// // Load data when the document is ready
// document.addEventListener("DOMContentLoaded", () => {
//   fetchUserData();

//   // Event delegation for edit and delete buttons
//   document.addEventListener("click", (e) => {
//     if (e.target.classList.contains("edit-btn")) {
//       const userId = e.target.closest("tr").getAttribute("data-user-id");
//       editUser(userId);
//     } else if (e.target.classList.contains("delete-btn")) {
//       const userId = e.target.closest("tr").getAttribute("data-user-id");
//       deleteUser(userId);
//     }
//   });
// });

// // Listen for the form submission
// form.addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const userData = {
//     faculty_id: faculty_idInput.value,
//     faculty_name: faculty_nameInput.value,
//     training_id: training_idInput.value,
//     training_title: training_titleInput.value,
//     start_date: start_dateInput.value,
//     end_date: end_dateInput.value,

//     // registration_date: registration_dateInput.value,
//   };

//   if (isEdit) {
//     // Update existing data
//     const { error } = await supabase.from("registration").update(userData).eq("id", editId);
//     if (error) {
//       console.error("Error updating data:", error);
//       return;
//     }
//   } else {
//     // Insert new data
//     const { error } = await supabase.from("registration").insert([userData]);
//     if (error) {
//       console.error("Error inserting data:", error);
//       return;
//     }
//   }

//   // Reset form and modal
//   form.reset();
//   isEdit = false;
//   const userFormModal = bootstrap.Modal.getInstance(document.getElementById("userForm"));
//   userFormModal.hide();

//   // Refresh data
//   await fetchUserData();
// });

// // Automatically set the current date and time in the registration_date field
// // document.getElementById("userForm").addEventListener("show.bs.modal", () => {
// //   if (!isEdit) {
// //     const now = new Date();
// //     const formattedDate = now.toISOString().slice(0, 19).replace("T", " ");
// //     registration_dateInput.value = formattedDate;
// //   }
// // });

// // // Ensure the field is not editable
// // registration_dateInput.readOnly = true;


// async function editUser(userId) {
//   const { data, error } = await supabase.from("registration").select("*").eq("id", userId).single();
//   if (error) {
//     console.error("Error fetching data for edit:", error);
//     return;
//   }

//   // Populate the form fields with the fetched data
//   faculty_idInput.value = data.faculty_id;
//   faculty_nameInput.value = data.faculty_name;
//   training_idInput.value = data.training_id;
//   training_titleInput.value = data.training_title;
//   start_dateInput.value = data.start_date;
//   end_dateInput.value = data.end_date;
//   // registration_dateInput.value = data.registration_date;

//   // Set edit mode and track the user ID being edited
//   isEdit = true;
//   editId = userId;

//   // Show the form modal
//   const userFormModal = new bootstrap.Modal(document.getElementById("userForm"));
//   userFormModal.show();
// }

// async function deleteUser(userId) {
//   if (!confirm("Are you sure you want to delete this record?")) {
//     return;
//   }

//   const { error } = await supabase.from("registration").delete().eq("id", userId);
//   if (error) {
//     console.error("Error deleting user:", error);
//     return;
//   }

//   // Refresh the table data
//   await fetchUserData();
// }


// // Fetch and display faculty data from Supabase
// async function fetchUserData() {
//   const { data, error } = await supabase.from("registration").select("*");
//   if (error) {
//     console.error("Error fetching data:", error);
//     return;
//   }
//   console.log(data);
//   userInfo.innerHTML = "";
//   data.forEach((user, index) => {
//     userInfo.innerHTML += createTableRow(user, index);
//   });
// }


// // Create HTML for each table row
// function createTableRow(user, index) {
//   return `
//     <tr data-user-id="${user.id}">
//       <td>${index + 1}</td>
//       <td>${user.faculty_id}</td>
//       <td>${user.training_name}</td>
//       <td>${user.training_id}</td>
//       <td>${user.training_title}</td>
//         <td>${user.start_date}</td>
//          <td>${user.end_date}</td>
//       <td>
//         <button class="btn btn-sm btn-primary edit-btn">Edit</button>
//         <button class="btn btn-sm btn-danger delete-btn">Delete</button>
//       </td>
//     </tr>
//   `;
// }


const form = document.getElementById("myForm");
const userInfo = document.getElementById("data");

const faculty_idInput = document.getElementById("faculty_id");
const faculty_nameInput = document.getElementById("faculty_name");
const training_idInput = document.getElementById("training_id");
const training_titleInput = document.getElementById("training_title");
const start_dateInput = document.getElementById("start_date");
const end_dateInput = document.getElementById("end_date");

let isEdit = false, editId;

// Fetch data when the document loads
document.addEventListener("DOMContentLoaded", fetchUserData);

// Form submission
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const userData = {
    faculty_id: faculty_idInput.value,
    faculty_name: faculty_nameInput.value,
    training_id: training_idInput.value,
    training_title: training_titleInput.value,
    start_date: start_dateInput.value,
    end_date: end_dateInput.value,
  };

  try {
    if (isEdit) {
      await supabase.from("registration").update(userData).eq("id", editId);
    } else {
      await supabase.from("registration").insert([userData]);
    }

    resetForm();
    fetchUserData();
  } catch (error) {
    console.error("Error saving data:", error.message);
  }
});

// Fetch data from Supabase
async function fetchUserData() {
  try {
    const { data, error } = await supabase.from("registration").select("*");
    if (error) throw error;

    userInfo.innerHTML = data.map((user, index) =>
      `
      <tr data-user-id="${user.id}">
        <td>${index + 1}</td>
        <td>${user.faculty_id}</td>
        <td>${user.faculty_name}</td>
        <td>${user.training_id}</td>
        <td>${user.training_title}</td>
        <td>${user.start_date}</td>
        <td>${user.end_date}</td>
        <td>
          <button class="btn btn-sm btn-warning edit-btn" onclick="editUser(${user.id})">Edit</button>
          <button class="btn btn-sm btn-danger delete-btn" onclick="deleteUser(${user.id})">Delete</button>
        </td>
      </tr>`
    ).join("");
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

// Edit user
async function editUser(userId) {
  try {
    const { data } = await supabase.from("registration").select("*").eq("id", userId).single();

    if (!data) return;

    // Populate fields
    faculty_idInput.value = data.faculty_id;
    faculty_nameInput.value = data.faculty_name;
    training_idInput.value = data.training_id;
    training_titleInput.value = data.training_title;
    start_dateInput.value = data.start_date;
    end_dateInput.value = data.end_date;

    isEdit = true;
    editId = userId;

    new bootstrap.Modal(document.getElementById("userForm")).show();
  } catch (error) {
    console.error("Error editing user:", error.message);
  }
}

// Delete user
async function deleteUser(userId) {
  if (!confirm("Are you sure you want to delete this record?")) return;

  try {
    await supabase.from("registration").delete().eq("id", userId);
    fetchUserData();
  } catch (error) {
    console.error("Error deleting user:", error.message);
  }
}

// Reset form
function resetForm() {
  form.reset();
  isEdit = false;
  editId = null;
  bootstrap.Modal.getInstance(document.getElementById("userForm")).hide();
}

