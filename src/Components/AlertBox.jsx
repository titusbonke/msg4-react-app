import React, { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript
const AlertBox = ({ message, typeClass = "success", closeable = true, fadeAwayTime = 3000,relatively=false }) => {
  useEffect(() => {
    window.jQuery(".alert").alert();

    const timeout = setTimeout(() => {
      if (fadeAwayTime > 0) {
        window.jQuery(".alert").fadeTo(500, 0).slideUp(500, function () {
          window.jQuery(this).remove();
        });
      }
    }, fadeAwayTime);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, []); 

  const alertStyle = {
    position: "fixed",
    bottom: 0, // Adjust as needed
    right: 0, // Adjust as needed
    zIndex: 10000 // Ensure it appears above other content
  };

  return (
    <div style={relatively?{}:alertStyle} className={`alert alert-${typeClass} alert-dismissible fade show alert-bottom-left m-2`} role="alert">
      {message}
      {closeable ? <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button> : ""}
    </div>
  );
};
export default AlertBox;

export function AlertBoxContainer() {
  var alertContainer= {
    position: "fixed",
    bottom: 0, /* Adjust as needed */
    right: 0, /* Adjust as needed */
    zIndex: 10000 /* Ensure it appears above other content */
  }
  return (  
    <div style={alertContainer} id='alert-container'></div>
  );
}


export function ShowAlertBox(message, typeClass = "success", closeable = true, fadeAwayTime = 3000) {
  // Create the alert element
  const alertElement = document.createElement('div');
  alertElement.className = `alert alert-${typeClass} alert-dismissible fade show alert-bottom-left m-2`;
  alertElement.setAttribute("role", "alert");
  alertElement.innerHTML = `
    ${message}
    ${closeable ? `<button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>` : ""}
  `;

  // Append the alert to the body
  document.getElementById("alert-container").appendChild(alertElement);
  // Remove the alert after 3 seconds
  const timeout = setTimeout(() => {
    if (fadeAwayTime > 0) {
      window.jQuery(alertElement).fadeTo(500, 0).slideUp(500, function () {
        this.remove();
      });
    }
  }, fadeAwayTime);
  // Clear the timeout on alert close to prevent premature removal
  alertElement.querySelector('.close')?.addEventListener('click', () => {
    clearTimeout(timeout);
    alertElement.remove();
  });
}

