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
// const agencyNameInput = document.getElementById("agency_name");
// const emailInput = document.getElementById("email");
// const submitBtn = document.querySelector(".submit");
// const userInfo = document.getElementById("data");
// const modalTitle = document.querySelector("#userForm .modal-title");

// let isEdit = false,
//     editId;

// // Load data when the document is ready
// document.addEventListener("DOMContentLoaded", () => {
//     fetchUserData();

//     // Event delegation for edit and delete buttons
//     document.addEventListener("click", (e) => {
//         if (e.target.classList.contains("edit-btn")) {
//             const userId = e.target.closest("tr").getAttribute("data-user-id");
//             editUser(userId);
//         } else if (e.target.classList.contains("delete-btn")) {
//             const userId = e.target.closest("tr").getAttribute("data-user-id");
//             deleteUser(userId);
//         }
//     });
// });


// submitBtn.addEventListener("click", handleSubmit);

// // Fetch and display agency data from Supabase
// async function fetchUserData() {
//     const { data, error } = await supabase.from("agency").select("*");
//     if (error) {
//         console.error("Error fetching data:", error);
//         return;
//     }
//     userInfo.innerHTML = "";
//     data.forEach((user, index) => {
//         userInfo.innerHTML += createTableRow(user, index);
//     });
// }

// // Handle form submission (create or update)
// async function handleSubmit(e) {
//     e.preventDefault();
//     const userData = {
//         agency_name: agencyNameInput.value,
//         email: emailInput.value,
//     };

//     if (isEdit) {
//         // Update existing data
//         const { error } = await supabase.from("agency").update(userData).eq("id", editId);
//         if (error) {
//             console.error("Error updating data:", error);
//             return;
//         }
//     } else {
//         // Insert new data
//         const { error } = await supabase.from("agency").insert([userData]);
//         if (error) {
//             console.error("Error inserting data:", error);
//             return;
//         }
//     }

//     // Reset form and modal
//     form.reset();
//     isEdit = false;
//     const userFormModal = bootstrap.Modal.getInstance(document.getElementById("userForm"));
//     userFormModal.hide();

//     // Refresh data
//     await fetchUserData();
// }

// // Edit user data
// async function editUser(userId) {
//     isEdit = true;
//     editId = userId;

//     const { data, error } = await supabase.from("agency").select("*").eq("id", userId).single();
//     if (error) {
//         console.error("Error fetching user:", error);
//         return;
//     }

//     // Populate form with user data
//     agencyNameInput.value = data.agency_name;
//     emailInput.value = data.email;

//     // Open modal with edit title
//     modalTitle.innerText = "Edit Agency";
//     const userFormModal = new bootstrap.Modal(document.getElementById("userForm"));
//     userFormModal.show();
// }

// // Delete user data
// async function deleteUser(userId) {
//     if (confirm("Are you sure you want to delete this agency?")) {
//         const { error } = await supabase.from("agency").delete().eq("id", userId);
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
//         <tr data-user-id="${user.id}">
//             <td>${index + 1}</td>
//             <td>${user.agency_name}</td>
//             <td>${user.email}</td>
//             <td>
//                 <button class="btn btn-primary edit-btn">Edit</button>
//                 <button class="btn btn-danger delete-btn">Delete</button>
//             </td>
//         </tr>
//     `;
// }



const form = document.getElementById("myForm");
const agencyNameInput = document.getElementById("agency_name");
const emailInput = document.getElementById("email");
const submitBtn = document.querySelector(".submit");
const userInfo = document.getElementById("data");
// const editModal = document.getElementById("editForm");
const modalTitle = document.querySelector("#userForm .modal-title");

// let isEdit = false, editId = null;
let isEdit = false,
    editId;


document.addEventListener("DOMContentLoaded", fetchUserData);

// submitBtn.addEventListener("click", async (e) => {
//     e.preventDefault();
//     const agencyName = agencyNameInput.value.trim();
//     const email = emailInput.value.trim();

//     if (!agencyName || !email) {
//         alert("Please fill in all fields.");
//         return;
//     }

//     try {
//         if (isEdit) {
//             await updateAgency(editId, { agency_name: agencyName, email });
//         } else {
//             await addNewAgency({ agency_name: agencyName, email });
//         }
//         resetForm();
//         fetchUserData();
//     } catch (error) {
//         console.error("Error:", error.message);
//         alert("Failed to process request.");
//     }
// });

 // Event delegation for edit and delete buttons
 document.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-btn")) {
      const userId = e.target.closest("tr").getAttribute("data-user-id");
      editUser(userId);
  } else if (e.target.classList.contains("delete-btn")) {
      const userId = e.target.closest("tr").getAttribute("data-user-id");
      deleteUser(userId);
  }
});


// Fetch and display agencies
// async function fetchUserData() {
//     const { data, error } = await supabase.from("agency").select("*");
//     if (error) {
//         console.error("Error fetching data:", error);
//         return;
//     }
//     userInfo.innerHTML = data
//         .map(
//             (agency, index) => `
//         <tr data-user-id="${agency.agency_id}">
//             <td>${agency.agency_id}</td>
//             <td>${agency.agency_name}</td>
//             <td>${agency.email}</td>
//             <td>
//                 <button class="btn btn-warning edit-btn">Edit</button>
//                 <button class="btn btn-danger delete-btn">Delete</button>
//             </td>
//         </tr>`
//         )
//         .join("");
// }

// // Add new agency
// async function addNewAgency(agency) {
//     const { error } = await supabase.from("agency").insert([agency]);
//     if (error) throw new Error(error.message);
//     alert("Agency added successfully!");
// }

// // Update agency
// async function updateAgency(id, updatedData) {
//     const { error } = await supabase.from("agency").update(updatedData).eq("agency_id", id);
//     if (error) throw new Error(error.message);
//     alert("Agency updated successfully!");
// }

// // Edit agency
// document.addEventListener("click", async (e) => {
//     if (e.target.classList.contains("edit-btn")) {
//         const row = e.target.closest("tr");
//         editId = row.getAttribute("data-user-id");
//         const agencyName = row.children[1].textContent;
//         const email = row.children[2].textContent;

//         agencyNameInput.value = agencyName;
//         emailInput.value = email;
//         isEdit = true;

//         // Show modal for editing
//         new bootstrap.Modal(editModal).show();
//     } else if (e.target.classList.contains("delete-btn")) {
//         const userId = e.target.closest("tr").getAttribute("data-user-id");
//         if (confirm("Are you sure you want to delete this agency?")) {
//             await deleteAgency(userId);
//             fetchUserData();
//         }
//     }
// });

// // Delete agency
// async function deleteAgency(id) {
//     const { error } = await supabase.from("agency").delete().eq("agency_id", id);
//     if (error) throw new Error(error.message);
//     alert("Agency deleted successfully!");
// }

// // Reset form
// function resetForm() {
//     form.reset();
//     isEdit = false;
//     editId = null;
// }

submitBtn.addEventListener("click", handleSubmit);

// Fetch and display faculty data from Supabase
async function fetchUserData() {
    const { data, error } = await supabase.from("agency").select("*");
    if (error) {
        console.error("Error fetching data:", error);
        return;
    }
    userInfo.innerHTML = "";
    data.forEach((user, index) => {
        userInfo.innerHTML += createTableRow(user, index);
    });
}

// Handle form submission (create or update)
async function handleSubmit(e) {
    e.preventDefault();
    const userData = {
        agency_name: agencyNameInput.value,
        email: emailInput.value,
    };

    if (isEdit) {
        // Update existing data
        const { error } = await supabase.from("agency").update(userData).eq("id", editId);
        if (error) {
            console.error("Error updating data:", error);
            return;
        }
    } else {
        // Insert new data
        const { error } = await supabase.from("agency").insert([userData]);
        if (error) {
            console.error("Error inserting data:", error);
            return;
        }
    }

    // Refresh data
    await fetchUserData();
}

// Edit user data
async function editUser(userId) {
    isEdit = true;
    editId = userId;

    const { data, error } = await supabase.from("agency").select("*").eq("id", userId).single();
    if (error) {
        console.error("Error fetching user:", error);
        return;
    }

    // Populate form with user data
    agencyNameInput.value = data.agency_name;
    emailInput.value = data.email;
   

    // Open modal with edit title
    modalTitle.innerText = "Edit Agency";
    const userFormModal = new bootstrap.Modal(document.getElementById("userForm"));
    userFormModal.show();
}

// Delete user data
async function deleteUser(userId) {
    if (confirm("Are you sure you want to delete this faculty Agency?")) {
        const { error } = await supabase.from("agency").delete().eq("id", userId);
        if (error) {
            console.error("Error deleting user:", error);
            return;
        }
        await fetchUserData();
    }
}

// Create HTML for each table row
function createTableRow(user, index) {
    return `
        <tr data-user-id="${user.id}">
            <td>${index + 1}</td>
            <td>${user.agency_name}</td>
            <td>${user.email}</td>
            <td>
                <button class="btn btn-primary edit-btn">Edit</button>
                <button class="btn btn-danger delete-btn">Delete</button>
            </td>
        </tr>
    `;
}


