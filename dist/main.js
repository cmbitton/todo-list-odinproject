(()=>{"use strict";class t{content=document.querySelector("#content");navbar=document.createElement("div");logo=document.createElement("h3");menuButtonContainer=document.createElement("div");menu=document.createElement("div");home=document.createElement("p");projects=document.createElement("p");constructor(){}loadNav(){this.navbar.classList.add("navbar"),this.logo.classList.add("logo"),this.logo.textContent="Your Logo",this.navbar.append(this.logo),this.content.append(this.navbar)}loadMenu(){this.menu.classList.add("menu"),this.menuButtonContainer.classList.add("nav-button-container"),this.home.classList.add("home","navbutton","button-selected"),this.projects.classList.add("projects","navbutton"),this.home.textContent="Home",this.projects.textContent="Projects",this.menuButtonContainer.append(this.home,this.projects),this.menu.append(this.menuButtonContainer),this.content.append(this.menu)}}class n{content=document.querySelector("#content");mainContentContainer=document.createElement("div");addTodoButton=document.createElement("div");constructor(){}loadMainContent(){this.mainContentContainer.classList.add("main-content-container"),this.addTodoButton.classList.add("add-todo-button"),this.addTodoButton.textContent="New Todo +",this.mainContentContainer.append(this.addTodoButton),this.content.append(this.mainContentContainer)}}const e=new class{content=document.querySelector("#content");constructor(){this.navMenu=new t,this.mainContent=new n}dimBackground(){this.navMenu.menu.style.filter="brightness(50%)",this.navMenu.navbar.style.filter="brightness(50%)",this.mainContent.mainContentContainer.style.filter="brightness(50%)"}unDimBackground(){this.navMenu.menu.removeAttribute("style"),this.navMenu.navbar.removeAttribute("style"),this.mainContent.mainContentContainer.removeAttribute("style")}},o=new class{content=document.querySelector("#content");modalContainer=document.createElement("div");modalForm=document.createElement("form");constructor(){this.modalContainer.classList.add("new-todo-container","hidden"),this.modalContainer.append(this.modalForm),this.content.append(this.modalContainer)}toggleModalVisibility(){this.modalContainer.classList.toggle("hidden")}openModal(t){t.stopPropagation(),this.toggleModalVisibility()}closeModal(t){let n=t.target,e=!0;for(;n&&"BODY"!==n.nodeName;){if(n.classList.contains("new-todo-container")){e=!1;break}n=n.parentNode}return e&&!this.modalContainer.classList.contains("hidden")&&this.modalContainer.classList.toggle("hidden"),e}loadModalContent(){}};e.navMenu.loadNav(),e.navMenu.loadMenu(),e.mainContent.loadMainContent(),document.querySelector(".add-todo-button").addEventListener("click",(t=>{o.modalContainer.classList.contains("hidden")&&(o.openModal(t),e.dimBackground())})),window.addEventListener("click",(t=>{o.closeModal(t)&&e.unDimBackground()}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SCxJQUFhN0IsS0FBS21CLGVBQWVsQixVQUFVOEIsU0FBUyxXQUNwRC9CLEtBQUttQixlQUFlbEIsVUFBVXFCLE9BQU8sVUFFbENPLENBQ1gsQ0FFQUksbUJBRUEsR0RqQ0p2QixFQUFjQyxRQUFRWixVQUN0QlcsRUFBY0MsUUFBUU4sV0FDdEJLLEVBQWNFLFlBQVlILGtCQUVKcEIsU0FBU0MsY0FBYyxvQkFHL0I0QyxpQkFBaUIsU0FBVVYsSUFDakNOLEVBQVVDLGVBQWVsQixVQUFVOEIsU0FBUyxZQUM1Q2IsRUFBVUssVUFBVUMsR0FDcEJkLEVBQWNHLGdCQUNsQixJQUtKc0IsT0FBT0QsaUJBQWlCLFNBQVVWLElBQ2ZOLEVBQVVRLFdBQVdGLElBQ3hCZCxFQUFjTSxpQkFBaUIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC1vZGlucHJvamVjdC8uL3NyYy9sb2FkaG9tZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2RpbnByb2plY3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW5wcm9qZWN0Ly4vc3JjL3RvZG9tb2RhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBMYW5kaW5nUGFnZSB7XG4gICAgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLm5hdk1lbnUgPSBuZXcgTmF2aWdhdGlvbjtcbiAgICAgICAgdGhpcy5tYWluQ29udGVudCA9IG5ldyBNYWluQ29udGVudDtcbiAgICB9XG5cbiAgICBkaW1CYWNrZ3JvdW5kICgpIHtcbiAgICAgICAgdGhpcy5uYXZNZW51Lm1lbnUuc3R5bGUuZmlsdGVyID0gJ2JyaWdodG5lc3MoNTAlKSc7XG4gICAgICAgIHRoaXMubmF2TWVudS5uYXZiYXIuc3R5bGUuZmlsdGVyID0gJ2JyaWdodG5lc3MoNTAlKSc7XG4gICAgICAgIHRoaXMubWFpbkNvbnRlbnQubWFpbkNvbnRlbnRDb250YWluZXIuc3R5bGUuZmlsdGVyID0gJ2JyaWdodG5lc3MoNTAlKSc7XG4gICAgfVxuXG4gICAgdW5EaW1CYWNrZ3JvdW5kICgpIHtcbiAgICAgICAgdGhpcy5uYXZNZW51Lm1lbnUucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICB0aGlzLm5hdk1lbnUubmF2YmFyLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgdGhpcy5tYWluQ29udGVudC5tYWluQ29udGVudENvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgfVxuXG59XG5cblxuY2xhc3MgTmF2aWdhdGlvbiB7XG4gICAgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgbWVudUJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0cnVjdG9yICgpIHtcblxuICAgIH1cblxuICAgIGxvYWROYXYgKCkge1xuICAgICAgICB0aGlzLm5hdmJhci5jbGFzc0xpc3QuYWRkKCduYXZiYXInKTtcbiAgICAgICAgdGhpcy5sb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcbiAgICAgICAgdGhpcy5sb2dvLnRleHRDb250ZW50ID0gJ1lvdXIgTG9nbyc7XG4gICAgICAgIHRoaXMubmF2YmFyLmFwcGVuZCh0aGlzLmxvZ28pO1xuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kKHRoaXMubmF2YmFyKTtcblxuICAgIH1cblxuICAgIGxvYWRNZW51ICgpIHtcbiAgICAgICAgdGhpcy5tZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgICAgICAgdGhpcy5tZW51QnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b24tY29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMuaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lJywgJ25hdmJ1dHRvbicsICdidXR0b24tc2VsZWN0ZWQnKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycsICduYXZidXR0b24nKTtcblxuICAgICAgICB0aGlzLmhvbWUudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgICAgIHRoaXMucHJvamVjdHMudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuXG4gICAgICAgIHRoaXMubWVudUJ1dHRvbkNvbnRhaW5lci5hcHBlbmQodGhpcy5ob21lLCB0aGlzLnByb2plY3RzKVxuICAgICAgICB0aGlzLm1lbnUuYXBwZW5kKHRoaXMubWVudUJ1dHRvbkNvbnRhaW5lcilcbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLm1lbnUpO1xuICAgIH1cblxuXG59XG5cbmNsYXNzIE1haW5Db250ZW50IHtcbiAgICBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZFRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICB9XG5cbiAgICBsb2FkTWFpbkNvbnRlbnQgKCkge1xuICAgICAgICB0aGlzLm1haW5Db250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudC1jb250YWluZXInKTtcbiAgICAgICAgdGhpcy5hZGRUb2RvQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvLWJ1dHRvbicpO1xuXG4gICAgICAgIHRoaXMuYWRkVG9kb0J1dHRvbi50ZXh0Q29udGVudCA9ICdOZXcgVG9kbyArJ1xuXG4gICAgICAgIHRoaXMubWFpbkNvbnRlbnRDb250YWluZXIuYXBwZW5kKHRoaXMuYWRkVG9kb0J1dHRvbik7XG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmQodGhpcy5tYWluQ29udGVudENvbnRhaW5lcik7XG4gICAgfVxufSIsImltcG9ydCB7IGRlZmF1bHQgYXMgTGFuZGluZ1BhZ2UgfSBmcm9tIFwiLi9sb2FkaG9tZS5qc1wiO1xuaW1wb3J0IFRvRG9Nb2RhbCBmcm9tIFwiLi90b2RvbW9kYWwuanNcIjtcblxuY29uc3QgbGFuZGluZ0xvYWRlciA9IG5ldyBMYW5kaW5nUGFnZTtcbmNvbnN0IHRvZG9tb2RhbCA9IG5ldyBUb0RvTW9kYWw7XG5sYW5kaW5nTG9hZGVyLm5hdk1lbnUubG9hZE5hdigpO1xubGFuZGluZ0xvYWRlci5uYXZNZW51LmxvYWRNZW51KCk7XG5sYW5kaW5nTG9hZGVyLm1haW5Db250ZW50LmxvYWRNYWluQ29udGVudCgpO1xuXG5jb25zdCBuZXdUb2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10b2RvLWJ1dHRvbicpO1xuXG4vL29wZW5zIHRoZSBhZGQgbmV3IHRvZG8gbW9kYWxcbm5ld1RvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICh0b2RvbW9kYWwubW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgICB0b2RvbW9kYWwub3Blbk1vZGFsKGUpO1xuICAgICAgICBsYW5kaW5nTG9hZGVyLmRpbUJhY2tncm91bmQoKTtcbiAgICB9XG59KTtcblxuXG4vL2Nsb3NlcyBhZGQgbmV3IHRvZG8gbW9kYWxcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgY2xvc2VkID0gdG9kb21vZGFsLmNsb3NlTW9kYWwoZSk7XG4gICAgaWYgKGNsb3NlZCkgbGFuZGluZ0xvYWRlci51bkRpbUJhY2tncm91bmQoKTtcbn0pIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9Eb01vZGFsIHtcbiAgICBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMubW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmV3LXRvZG8tY29udGFpbmVyJywgJ2hpZGRlbicpO1xuICAgICAgICB0aGlzLm1vZGFsQ29udGFpbmVyLmFwcGVuZCh0aGlzLm1vZGFsRm9ybSlcbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZCh0aGlzLm1vZGFsQ29udGFpbmVyKTtcblxuICAgIH1cblxuICAgIHRvZ2dsZU1vZGFsVmlzaWJpbGl0eSAoKSB7XG4gICAgICAgIHRoaXMubW9kYWxDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgb3Blbk1vZGFsKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy50b2dnbGVNb2RhbFZpc2liaWxpdHkoKTtcbiAgICB9XG5cbiAgICBjbG9zZU1vZGFsKGUpIHtcbiAgICAgICAgbGV0IHJldmlld05vZGUgPSBlLnRhcmdldDtcbiAgICAgICAgbGV0IGV4aXRGb3JtID0gdHJ1ZTtcbiAgICAgICAgd2hpbGUgKHJldmlld05vZGUgJiYgcmV2aWV3Tm9kZS5ub2RlTmFtZSAhPT0gJ0JPRFknKSB7XG4gICAgICAgICAgaWYgKHJldmlld05vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCduZXctdG9kby1jb250YWluZXInKSkge1xuICAgICAgICAgICAgZXhpdEZvcm0gPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXZpZXdOb2RlID0gcmV2aWV3Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChleGl0Rm9ybSAmJiAhdGhpcy5tb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4aXRGb3JtO1xuICAgIH1cblxuICAgIGxvYWRNb2RhbENvbnRlbnQgKCkge1xuXG4gICAgfVxufSJdLCJuYW1lcyI6WyJOYXZpZ2F0aW9uIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm5hdmJhciIsImNyZWF0ZUVsZW1lbnQiLCJsb2dvIiwibWVudUJ1dHRvbkNvbnRhaW5lciIsIm1lbnUiLCJob21lIiwicHJvamVjdHMiLCJjb25zdHJ1Y3RvciIsImxvYWROYXYiLCJ0aGlzIiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJhcHBlbmQiLCJsb2FkTWVudSIsIk1haW5Db250ZW50IiwibWFpbkNvbnRlbnRDb250YWluZXIiLCJhZGRUb2RvQnV0dG9uIiwibG9hZE1haW5Db250ZW50IiwibGFuZGluZ0xvYWRlciIsIm5hdk1lbnUiLCJtYWluQ29udGVudCIsImRpbUJhY2tncm91bmQiLCJzdHlsZSIsImZpbHRlciIsInVuRGltQmFja2dyb3VuZCIsInJlbW92ZUF0dHJpYnV0ZSIsInRvZG9tb2RhbCIsIm1vZGFsQ29udGFpbmVyIiwibW9kYWxGb3JtIiwidG9nZ2xlTW9kYWxWaXNpYmlsaXR5IiwidG9nZ2xlIiwib3Blbk1vZGFsIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsImNsb3NlTW9kYWwiLCJyZXZpZXdOb2RlIiwidGFyZ2V0IiwiZXhpdEZvcm0iLCJub2RlTmFtZSIsImNvbnRhaW5zIiwicGFyZW50Tm9kZSIsImxvYWRNb2RhbENvbnRlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93Il0sInNvdXJjZVJvb3QiOiIifQ==