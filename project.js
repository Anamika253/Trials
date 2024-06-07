function projectcall() {
    var navbarDialog = document.getElementsByClassName('pro');
    var gyb = document.getElementById("Weather");
    gyb.style
    if (navbarDialog.style.display === 'none') {
        navbarDialog.style.display = 'block';
        gyb.style.display = 'none';
    } else {
        navbarDialog.style.display = 'none';
        gyb.style.display = 'block';
    }
}

function showDetails(projectName) {
    var tooltip = createTooltip();
    tooltip.innerText = getProjectDetails(projectName);
    tooltip.style.display = "block";
  }
  
function hideDetails() {
    var tooltip = document.getElementById("tooltip");
    tooltip.style.display = "none";
  }
  
function createTooltip() {
    var tooltip = document.getElementById("tooltip");
    if (!tooltip) {
      tooltip = document.createElement("div");
      tooltip.setAttribute("class", "hover-content");
      tooltip.setAttribute("id", "tooltip");
      document.body.appendChild(tooltip);
    }
    return tooltip;
  }
  
function getProjectDetails(projectName) {
    switch (projectName) {
      case "Wreport":
        return "Weather Project: This project provides real time weather report.";
      case "play":
        return "Music Project: This project plays my favorite songs.";
      case "py":
        return "Python Project: This project demonstrates Python programming and presentation of data through its libraries.";
      case "js":
        return "Java Project: This project showcases my knowledge in Java programming.";
      case "iot":
        return "IoT Project: This project involves Internet of Things device.A small fall detector which I designed in my summer training.";
      case "ui":
        return "UI Designs Project: This project displays basic yet beautiful UI designs which I designed for various technical competitions.";
      default:
        return "Still Learning!";
    }
  }


function addButtonClickListener(id, url, name)
{
      document.getElementById(id).addEventListener('click', function() {
          window.open(url, name, "height=500px,width=500px");
      });
}

  addButtonClickListener("Weather", "Wreport.html", "Weather");
  addButtonClickListener("Music", "Music.html", "Music");
  addButtonClickListener("Python", "https://docs.google.com/document/d/1CSsWDD2i7u7N6sv5TC7Sh0ecHOhowvs0pVg3Ri-gPyE/edit?usp=sharing", "Python");
  addButtonClickListener("Java", "2", "Java");
  addButtonClickListener("IoT", "https://docs.google.com/document/d/1dMuruZwHeGPA6atTqqaHJ09GGGcm80L8Qdo1DFdl_js/edit?usp=sharing3", "IoT");
  addButtonClickListener("UI" , "https://www.figma.com/file/B8CYW3DXx1oVP9gUXyvrOa/Untitled?type=design&node-id=6%3A644&mode=design&t=soWguDf3P7Owwqoe-1" , "UI");