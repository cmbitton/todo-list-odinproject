(()=>{"use strict";class e{content=document.querySelector("#content");mainContentContainer=document.querySelector(".main-content-container");todoscontainer=document.querySelector(".todos-container");constructor(){}loadTodos(e){let t=0;this.todoscontainer.innerHTML="";for(const n of e){const e=document.createElement("div");e.classList.add("todo-container"),e.setAttribute("data-todo-index",t),!0===n.complete&&e.classList.add("completed"),t++;const c=document.createElement("h2");c.classList.add("todo-title"),c.textContent=n.title;const s=document.createElement("p");s.classList.add("todo-description"),s.textContent=n.description;const d=document.createElement("p");d.classList.add("todo-date"),d.innerHTML=`<span class="due-date-label">Due Date: </span> ${n.dueDate.slice(5,7)}/${n.dueDate.slice(8,11)}/${n.dueDate.slice(0,4)}`;const a=document.createElement("p");a.classList.add("todo-time"),""!==n.time?a.innerHTML='<span class="due-time-label">Time Due: </span>'+(0==+(o=n.time).slice(0,2)?`${+o.slice(0,2)+12}:${o.slice(3,5)} AM`:+o.slice(0,2)<12?o+" AM":12==+o.slice(0,2)?`${o.slice(0,2)}:${o.slice(3,5)} PM`:`${+o.slice(0,2)-12}:${o.slice(3,5)} PM`):a.innerHTML='<span class="due-time-label">Time Due: </span> No Time Set';const i=document.createElement("p");i.classList.add("todo-project-name"),i.innerHTML=`<span class="due-date-label">Project Name: </span> ${n.projectName}`;const l=document.createElement("button");l.setAttribute("type","button"),l.classList.add("complete-button"),!0===n.complete&&l.classList.add("completed"),!1===n.complete?l.textContent="Not Completed":l.textContent="Completed";const r=document.createElement("div");r.classList.add("todo-options"),r.innerHTML='<span class="material-symbols-outlined todo-options-icon">more_vert</span>';const u=document.createElement("div"),m=document.createElement("div");m.textContent="Remove",m.classList.add("remove-todo"),u.classList.add("todo-options-container","hidden"),u.append(m),r.append(u),e.append(c,s,d,a,i,l,r),this.todoscontainer.append(e)}var o}addCompletionButtonEvent(e){const t=document.querySelectorAll(".complete-button");for(const o of t)o.addEventListener("click",(t=>{o.classList.contains("completed")?(o.classList.remove("completed"),o.textContent="Not Completed",t.target.parentNode.classList.remove("completed"),e[t.target.parentNode.getAttribute("data-todo-index")].complete=!1):(o.classList.add("completed"),t.target.parentNode.classList.add("completed"),o.textContent="Completed",e[t.target.parentNode.getAttribute("data-todo-index")].complete=!0)}))}showTodoOptions(){const e=document.querySelectorAll(".todo-options-icon");for(const t of e)t.addEventListener("click",(e=>{const t=e.target.parentNode;console.log(t);const o=t.querySelector(".todo-options-container");o.classList.contains("hidden")?o.classList.remove("hidden"):o.classList.add("hidden")}))}}class t{content=document.querySelector("#content");todoscontainer=document.querySelector(".todos-container");projectTitle=document.createElement("h1");constructor(){this.loadTitle(),this.projects=[]}loadTitle(){this.projectTitle.textContent="Projects",this.todoscontainer.append(this.projectTitle)}}class o{constructor(e,t,o,n,c,s){this.title=e,this.description=t,this.dueDate=o,this.time=n,this.complete=c,this.projectName=s}}const n=new class{content=document.querySelector("#content");nav=document.querySelector(".navbar");constructor(){this.mainContent=new e}dimBackground(){this.nav.style.filter="brightness(50%)",this.mainContent.mainContentContainer.style.filter="brightness(50%)"}unDimBackground(){this.nav.removeAttribute("style"),this.mainContent.mainContentContainer.removeAttribute("style")}},c=new class{content=document.querySelector("#content");modalContainer=document.querySelector(".new-todo-container");constructor(){}toggleModalVisibility(){this.modalContainer.classList.toggle("hidden")}openModal(e){e.stopPropagation(),this.toggleModalVisibility()}closeModal(e){let t=e.target,o=!0;if(!e.target.classList.contains("submit-todo-button"))for(;t&&"BODY"!==t.nodeName;){if(t.classList.contains("new-todo-container")){o=!1;break}t=t.parentNode}return o&&!this.modalContainer.classList.contains("hidden")&&this.modalContainer.classList.toggle("hidden"),o}loadModalContent(){const e=document.querySelector("#tododate"),t=function(){const e=new Date,t=e.getFullYear(),o=e.getDate();let n=e.getMonth()+1;return n.toString.length<2&&(n="0"+n),{year:t,month:n,day:o}}();e.setAttribute({min:`${t.year}-${t.month}-${t.day}`,required:!0})}clearModalContent(){document.querySelector("#todoname").value="",document.querySelector("#tododescription").value="",document.querySelector("#tododate").value="",document.querySelector("#todotime").value="",document.querySelector("#project-name").value=""}},s=[],d=document.querySelector(".todos-container"),a=document.querySelector(".new-todo-container"),i=document.querySelector(".add-todo-button"),l=document.querySelector(".submit-todo-button"),r=document.querySelector(".projects"),u=document.querySelector("#project-selection"),m=document.querySelector(".home");function p(){const e=document.querySelector(".project-name-container"),t=document.querySelector("#project-name");"New Project"===u.value?(e.classList.contains("hidden")&&e.classList.remove("hidden"),t.value=""):e.classList.contains("hidden")||e.classList.add("hidden")}function L(){const e=document.querySelectorAll(".remove-todo");for(const t of e)t.addEventListener("click",(e=>{const t=+e.target.parentNode.parentNode.parentNode.getAttribute("data-todo-index");s.splice(t,1),n.mainContent.loadTodos(s),h(),y(s),L()}))}function y(e){const t=document.querySelectorAll(".complete-button");for(const o of t)o.addEventListener("click",(t=>{o.classList.contains("completed")?(o.classList.remove("completed"),o.textContent="Not Completed",t.target.parentNode.classList.remove("completed"),e[t.target.parentNode.getAttribute("data-todo-index")].complete=!1):(o.classList.add("completed"),t.target.parentNode.classList.add("completed"),o.textContent="Completed",e[t.target.parentNode.getAttribute("data-todo-index")].complete=!0)}))}function h(){const e=document.querySelectorAll(".todo-options-icon");for(const t of e)t.addEventListener("click",(e=>{const t=e.target.parentNode.querySelector(".todo-options-container");t.classList.contains("hidden")?t.classList.remove("hidden"):t.classList.add("hidden")}))}i.addEventListener("click",(e=>{a.classList.contains("hidden")&&(c.openModal(e),c.clearModalContent(),n.dimBackground(),u.value="none",p())})),window.addEventListener("click",(e=>{c.closeModal(e)&&n.unDimBackground()})),m.addEventListener("click",(()=>{n.mainContent.loadTodos(s),r.classList.remove("button-selected"),m.classList.add("button-selected"),h(),y(s),L()})),r.addEventListener("click",(()=>{d.innerHTML="",m.classList.remove("button-selected"),r.classList.add("button-selected"),new t;const e=s.filter((e=>"None"!==e.projectName));n.mainContent.loadTodos(e)})),u.addEventListener("change",(()=>{p()})),l.addEventListener("click",(e=>{if(document.querySelector("form").checkValidity()){e.preventDefault();const t=document.querySelector("#todoname").value,d=document.querySelector("#tododescription").value,a=document.querySelector("#tododate").value,i=document.querySelector("#todotime").value;let l=document.querySelector("#project-name").value;""===l&&(l="None");const r=new o(t,d,a,i,!1,l);if(s.push(r),console.log(s),c.closeModal(e),n.dimBackground(),m.classList.contains("button-selected"))n.mainContent.loadTodos(s),y(s);else{const e=s.filter((e=>"None"!==e.projectName));n.mainContent.loadTodos(e),y(e)}h(),L()}else document.querySelector("form").reportValidity(),e.stopPropagation()}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3JCZSxFQUFjRyxnQkFDWG9DLEVBQVdoRixVQUFVMkIsU0FBUyxtQkFDakNjLEVBQWNFLFlBQVluRCxVQUFVbUYsR0FDcEN0RCxFQUF5QnNELE9BRXJCLENBQ0EsTUFBTWEsRUFBZWIsRUFBVTdCLFFBQU8yQyxHQUF1QixTQUFsQkEsRUFBRTFFLGNBQzdDMEIsRUFBY0UsWUFBWW5ELFVBQVVnRyxHQUNwQ25FLEVBQXlCbUUsRUFDN0IsQ0FDQXhELElBQ0FtRCxHQUdKLE1BN0JJaEcsU0FBU0MsY0FBYyxRQUFReUcsaUJBQy9CbkUsRUFBRTRCLGlCQTRCTixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW5wcm9qZWN0Ly4vc3JjL2xvYWRob21lLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGlucHJvamVjdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qtb2RpbnByb2plY3QvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW9kaW5wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1vZGlucHJvamVjdC8uL3NyYy90b2RvbW9kYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFuZGluZ1BhZ2Uge1xuICAgIGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tYWluQ29udGVudCA9IG5ldyBNYWluQ29udGVudDtcbiAgICB9XG5cbiAgICBkaW1CYWNrZ3JvdW5kKCkge1xuICAgICAgICB0aGlzLm5hdi5zdHlsZS5maWx0ZXIgPSAnYnJpZ2h0bmVzcyg1MCUpJztcbiAgICAgICAgdGhpcy5tYWluQ29udGVudC5tYWluQ29udGVudENvbnRhaW5lci5zdHlsZS5maWx0ZXIgPSAnYnJpZ2h0bmVzcyg1MCUpJztcbiAgICB9XG5cbiAgICB1bkRpbUJhY2tncm91bmQoKSB7XG4gICAgICAgIHRoaXMubmF2LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgdGhpcy5tYWluQ29udGVudC5tYWluQ29udGVudENvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgfVxuXG59XG5cblxuY2xhc3MgTWFpbkNvbnRlbnQge1xuICAgIGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudC1jb250YWluZXInKTtcbiAgICB0b2Rvc2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvcy1jb250YWluZXInKTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuXG4gICAgbG9hZFRvZG9zKGFycikge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIHRoaXMudG9kb3Njb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGZvciAoY29uc3QgdG9kbyBvZiBhcnIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXInKTtcbiAgICAgICAgICAgIHRvZG9Db250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXRvZG8taW5kZXgnLCBpKTtcbiAgICAgICAgICAgIGlmICh0b2RvLmNvbXBsZXRlID09PSB0cnVlKSB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xuICAgICAgICAgICAgaSsrXG4gICAgICAgICAgICAvL3RpdGxlXG4gICAgICAgICAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGl0bGUnKTtcbiAgICAgICAgICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG5cbiAgICAgICAgICAgIC8vZGVzY3JpcHRpb25cbiAgICAgICAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICB0b2RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgICAgICAvL2RhdGVcbiAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgdG9kb0RhdGUuY2xhc3NMaXN0LmFkZCgndG9kby1kYXRlJyk7XG4gICAgICAgICAgICB0b2RvRGF0ZS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJkdWUtZGF0ZS1sYWJlbFwiPkR1ZSBEYXRlOiA8L3NwYW4+ICR7dG9kby5kdWVEYXRlLnNsaWNlKDUsIDcpfS8ke3RvZG8uZHVlRGF0ZS5zbGljZSg4LCAxMSl9LyR7dG9kby5kdWVEYXRlLnNsaWNlKDAsIDQpfWA7XG5cbiAgICAgICAgICAgIC8vdGltZVxuICAgICAgICAgICAgY29uc3QgdG9kb1RpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICB0b2RvVGltZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXRpbWUnKTtcbiAgICAgICAgICAgIGlmICh0b2RvLnRpbWUgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgdG9kb1RpbWUuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwiZHVlLXRpbWUtbGFiZWxcIj5UaW1lIER1ZTogPC9zcGFuPiR7Zm9ybWF0VGltZSh0b2RvLnRpbWUpfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b2RvVGltZS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJkdWUtdGltZS1sYWJlbFwiPlRpbWUgRHVlOiA8L3NwYW4+IE5vIFRpbWUgU2V0YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9wcm9qZWN0IHNlbGVjdGlvblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgICAgIHByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ3RvZG8tcHJvamVjdC1uYW1lJyk7XG4gICAgICAgICAgICBwcm9qZWN0cy5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJkdWUtZGF0ZS1sYWJlbFwiPlByb2plY3QgTmFtZTogPC9zcGFuPiAke3RvZG8ucHJvamVjdE5hbWV9YDtcblxuXG5cbiAgICAgICAgICAgIC8vY29tcGxldGlvbiBidXR0b25cbiAgICAgICAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY29tcGxldGVkLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgICAgICAgICAgY29tcGxldGVkLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlLWJ1dHRvbicpO1xuICAgICAgICAgICAgaWYgKHRvZG8uY29tcGxldGUgPT09IHRydWUpIGNvbXBsZXRlZC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgICAgICh0b2RvLmNvbXBsZXRlID09PSBmYWxzZSkgPyBjb21wbGV0ZWQudGV4dENvbnRlbnQgPSAnTm90IENvbXBsZXRlZCcgOiBjb21wbGV0ZWQudGV4dENvbnRlbnQgPSAnQ29tcGxldGVkJztcblxuICAgICAgICAgICAgLy9vcHRpb25zIG1lbnVcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnNNZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBvcHRpb25zTWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLW9wdGlvbnMnKTtcbiAgICAgICAgICAgIG9wdGlvbnNNZW51Q29udGFpbmVyLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQgdG9kby1vcHRpb25zLWljb25cIj5tb3JlX3ZlcnQ8L3NwYW4+JztcblxuICAgICAgICAgICAgLy9vcHRpb25zXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCByZW1vdmVUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByZW1vdmVUb2RvLnRleHRDb250ZW50ID0gJ1JlbW92ZSc7XG4gICAgICAgICAgICByZW1vdmVUb2RvLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZS10b2RvJyk7XG4gICAgICAgICAgICBvcHRpb25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tb3B0aW9ucy1jb250YWluZXInLCAnaGlkZGVuJyk7XG4gICAgICAgICAgICBvcHRpb25zQ29udGFpbmVyLmFwcGVuZChyZW1vdmVUb2RvKTtcblxuXG5cbiAgICAgICAgICAgIG9wdGlvbnNNZW51Q29udGFpbmVyLmFwcGVuZChvcHRpb25zQ29udGFpbmVyKTtcbiAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG9UaXRsZSwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvRGF0ZSwgdG9kb1RpbWUsIHByb2plY3RzLCBjb21wbGV0ZWQsIG9wdGlvbnNNZW51Q29udGFpbmVyLCk7XG4gICAgICAgICAgICB0aGlzLnRvZG9zY29udGFpbmVyLmFwcGVuZCh0b2RvQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZENvbXBsZXRpb25CdXR0b25FdmVudChhcnIpIHtcbiAgICAgICAgY29uc3QgY29tcGxldGlvbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wbGV0ZS1idXR0b24nKTtcbiAgICAgICAgZm9yIChjb25zdCBidXR0b24gb2YgY29tcGxldGlvbkJ1dHRvbikge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnY29tcGxldGVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZCcpO1xuICAgICAgICAgICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnTm90IENvbXBsZXRlZCdcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgYXJyW2UudGFyZ2V0LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZG8taW5kZXgnKV0uY29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlZCc7XG4gICAgICAgICAgICAgICAgICAgIGFycltlLnRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS10b2RvLWluZGV4JyldLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dUb2RvT3B0aW9ucygpIHtcbiAgICAgICAgY29uc3QgdG9kb09wdGlvbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLW9wdGlvbnMtaWNvbicpO1xuICAgICAgICBmb3IgKGNvbnN0IGJ1dHRvbiBvZiB0b2RvT3B0aW9uQnV0dG9uKSB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvZG8gPSBlLnRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG8pXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRvZG8ucXVlcnlTZWxlY3RvcignLnRvZG8tb3B0aW9ucy1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICAob3B0aW9ucy5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSA/IG9wdGlvbnMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJykgOiBvcHRpb25zLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZSh0aW1lKSB7XG4gICAgaWYgKCt0aW1lLnNsaWNlKDAsIDIpID09PSAwKSByZXR1cm4gKGAkeyt0aW1lLnNsaWNlKDAsIDIpICsgMTJ9OiR7dGltZS5zbGljZSgzLCA1KX0gQU1gKTtcbiAgICBlbHNlIGlmICgrdGltZS5zbGljZSgwLCAyKSA8IDEyKSByZXR1cm4gKHRpbWUgKz0gJyBBTScpO1xuICAgIGVsc2UgaWYgKCt0aW1lLnNsaWNlKDAsIDIpID09PSAxMikgcmV0dXJuIChgJHt0aW1lLnNsaWNlKDAsIDIpfToke3RpbWUuc2xpY2UoMywgNSl9IFBNYCk7XG4gICAgZWxzZSByZXR1cm4gKGAkeyt0aW1lLnNsaWNlKDAsIDIpIC0gMTJ9OiR7dGltZS5zbGljZSgzLCA1KX0gUE1gKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0c1BhZ2Uge1xuICAgIGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIHRvZG9zY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zLWNvbnRhaW5lcicpO1xuICAgIHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubG9hZFRpdGxlKCk7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBbXTtcbiAgICB9XG5cbiAgICBsb2FkVGl0bGUgKCkge1xuICAgICAgICB0aGlzLnByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG4gICAgICAgIHRoaXMudG9kb3Njb250YWluZXIuYXBwZW5kKHRoaXMucHJvamVjdFRpdGxlKTtcbiAgICB9XG4gICAgXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9EbyB7XG4gICAgY29uc3RydWN0b3IgKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgdGltZSwgY29tcGxldGUsIHByb2plY3ROYW1lKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGU7XG4gICAgICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBMYW5kaW5nUGFnZSB9IGZyb20gXCIuL2xvYWRob21lLmpzXCI7XG5pbXBvcnQgUHJvamVjdHNQYWdlIGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgVG9EbyBmcm9tIFwiLi90YXNrcy5qc1wiO1xuaW1wb3J0IFRvRG9Nb2RhbCBmcm9tIFwiLi90b2RvbW9kYWwuanNcIjtcblxuY29uc3QgbGFuZGluZ0xvYWRlciA9IG5ldyBMYW5kaW5nUGFnZSgpO1xuY29uc3QgdG9kb21vZGFsID0gbmV3IFRvRG9Nb2RhbCgpO1xuY29uc3QgdG9kb3NMaXN0ID0gW107XG5jb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zLWNvbnRhaW5lcicpO1xuY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRvZG8tY29udGFpbmVyJyk7XG5jb25zdCBuZXdUb2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10b2RvLWJ1dHRvbicpO1xuY29uc3Qgc3VibWl0VG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtdG9kby1idXR0b24nKTtcbmNvbnN0IHByb2plY3RzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG5jb25zdCBwcm9qZWN0U2VsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3Qtc2VsZWN0aW9uJyk7XG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcblxuXG5mdW5jdGlvbiByZXNldE5ld1RvZG9Qcm9qZWN0U2VsZWN0aW9uICgpIHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUtY29udGFpbmVyJyk7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpXG4gICAgaWYgKHByb2plY3RTZWxlY3Rpb24udmFsdWUgPT09ICdOZXcgUHJvamVjdCcpe1xuICAgICAgICBpZihwcm9qZWN0TmFtZUNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSBwcm9qZWN0TmFtZUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLnZhbHVlID0gJyc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZighcHJvamVjdE5hbWVDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkgcHJvamVjdE5hbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfVxufVxuLy9ldmVudCBsaXN0ZW5lcnNcbi8vb3BlbnMgdGhlIGFkZCBuZXcgdG9kbyBtb2RhbFxubmV3VG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgICAgdG9kb21vZGFsLm9wZW5Nb2RhbChlKTtcbiAgICAgICAgdG9kb21vZGFsLmNsZWFyTW9kYWxDb250ZW50KCk7XG4gICAgICAgIGxhbmRpbmdMb2FkZXIuZGltQmFja2dyb3VuZCgpO1xuICAgICAgICAvL3Jlc2V0cyBkZWZhdWx0IHByb2plY3Qgc2VsZWN0aW9uXG4gICAgICAgIHByb2plY3RTZWxlY3Rpb24udmFsdWUgPSAnbm9uZSc7XG4gICAgICAgIHJlc2V0TmV3VG9kb1Byb2plY3RTZWxlY3Rpb24oKTtcbiAgICB9XG59KTtcblxuXG4vL2Nsb3NlcyBhZGQgbmV3IHRvZG8gbW9kYWxcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgY2xvc2VkID0gdG9kb21vZGFsLmNsb3NlTW9kYWwoZSk7XG4gICAgaWYgKGNsb3NlZCkgbGFuZGluZ0xvYWRlci51bkRpbUJhY2tncm91bmQoKTtcblxufSlcblxuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsYW5kaW5nTG9hZGVyLm1haW5Db250ZW50LmxvYWRUb2Rvcyh0b2Rvc0xpc3QpO1xuICAgIHByb2plY3RzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2J1dHRvbi1zZWxlY3RlZCcpO1xuICAgIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLXNlbGVjdGVkJyk7XG4gICAgc2hvd1RvZG9PcHRpb25zKCk7XG4gICAgYWRkQ29tcGxldGlvbkJ1dHRvbkV2ZW50KHRvZG9zTGlzdCk7XG4gICAgYWRkUmVtb3ZlVG9kb0xpc3RlbmVyKCk7XG59KVxuXG5wcm9qZWN0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b2RvQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIGhvbWVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uLXNlbGVjdGVkJyk7XG4gICAgcHJvamVjdHNCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLXNlbGVjdGVkJyk7XG4gICAgY29uc3QgcHJvamVjdHMgPSBuZXcgUHJvamVjdHNQYWdlO1xuICAgIGNvbnN0IHByb2plY3RUb2RvcyA9IHRvZG9zTGlzdC5maWx0ZXIoYSA9PiBhLnByb2plY3ROYW1lICE9PSAnTm9uZScpO1xuICAgIGxhbmRpbmdMb2FkZXIubWFpbkNvbnRlbnQubG9hZFRvZG9zKHByb2plY3RUb2Rvcyk7XG59KVxuXG5wcm9qZWN0U2VsZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICByZXNldE5ld1RvZG9Qcm9qZWN0U2VsZWN0aW9uKCk7XG59KVxuXG5zdWJtaXRUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBsZXQgaXNGb3JtVmFsaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJykuY2hlY2tWYWxpZGl0eSgpO1xuICAgIGlmKCFpc0Zvcm1WYWxpZCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJykucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgZWxzZXsgXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb25hbWUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9kZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgICAgICBjb25zdCB0b2RvRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvZGF0ZScpLnZhbHVlO1xuICAgICAgICBjb25zdCB0b2RvVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvdGltZScpLnZhbHVlO1xuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJykudmFsdWU7XG4gICAgICAgIChwcm9qZWN0TmFtZSA9PT0gJycpID8gcHJvamVjdE5hbWUgPSAnTm9uZScgOiBwcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xuICAgICAgICBjb25zdCB0b2RvID0gbmV3IFRvRG8odG9kb1RpdGxlLCB0b2RvRGVzY3JpcHRpb24sIHRvZG9EYXRlLCB0b2RvVGltZSwgZmFsc2UsIHByb2plY3ROYW1lKTtcbiAgICAgICAgdG9kb3NMaXN0LnB1c2godG9kbyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG9zTGlzdClcbiAgICAgICAgdG9kb21vZGFsLmNsb3NlTW9kYWwoZSk7XG4gICAgICAgIGxhbmRpbmdMb2FkZXIuZGltQmFja2dyb3VuZCgpO1xuICAgICAgICBpZihob21lQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYnV0dG9uLXNlbGVjdGVkJykpe1xuICAgICAgICBsYW5kaW5nTG9hZGVyLm1haW5Db250ZW50LmxvYWRUb2Rvcyh0b2Rvc0xpc3QpO1xuICAgICAgICBhZGRDb21wbGV0aW9uQnV0dG9uRXZlbnQodG9kb3NMaXN0KTtcbiAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0VG9kb3MgPSB0b2Rvc0xpc3QuZmlsdGVyKGEgPT4gYS5wcm9qZWN0TmFtZSAhPT0gJ05vbmUnKTtcbiAgICAgICAgICAgIGxhbmRpbmdMb2FkZXIubWFpbkNvbnRlbnQubG9hZFRvZG9zKHByb2plY3RUb2Rvcyk7XG4gICAgICAgICAgICBhZGRDb21wbGV0aW9uQnV0dG9uRXZlbnQocHJvamVjdFRvZG9zKTtcbiAgICAgICAgfVxuICAgICAgICBzaG93VG9kb09wdGlvbnMoKTtcbiAgICAgICAgYWRkUmVtb3ZlVG9kb0xpc3RlbmVyKCk7XG4gICAgICAgIFxuXG4gICAgfVxuICAgIH0pXG5cblxuXG5mdW5jdGlvbiBhZGRSZW1vdmVUb2RvTGlzdGVuZXIgKCkge1xuICAgIGNvbnN0IHJlbW92ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlLXRvZG8nKTtcbiAgICBmb3IoY29uc3QgYnV0dG9uIG9mIHJlbW92ZUJ1dHRvbnMpe1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgY29uc3QgdG9kb2luZGV4ID0gK3RvZG9Db250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZG8taW5kZXgnKTtcbiAgICAgICAgICAgIHRvZG9zTGlzdC5zcGxpY2UodG9kb2luZGV4LCAxKTtcbiAgICAgICAgICAgIGxhbmRpbmdMb2FkZXIubWFpbkNvbnRlbnQubG9hZFRvZG9zKHRvZG9zTGlzdCk7XG4gICAgICAgICAgICBzaG93VG9kb09wdGlvbnMoKTtcbiAgICAgICAgICAgIGFkZENvbXBsZXRpb25CdXR0b25FdmVudCh0b2Rvc0xpc3QpO1xuICAgICAgICAgICAgYWRkUmVtb3ZlVG9kb0xpc3RlbmVyKCk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGFkZENvbXBsZXRpb25CdXR0b25FdmVudChhcnIpIHtcbiAgICBjb25zdCBjb21wbGV0aW9uQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXBsZXRlLWJ1dHRvbicpO1xuICAgIGZvciAoY29uc3QgYnV0dG9uIG9mIGNvbXBsZXRpb25CdXR0b24pIHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wbGV0ZWQnKSkge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnTm90IENvbXBsZXRlZCdcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZCcpO1xuICAgICAgICAgICAgICAgIGFycltlLnRhcmdldC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS10b2RvLWluZGV4JyldLmNvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQ29tcGxldGVkJztcbiAgICAgICAgICAgICAgICBhcnJbZS50YXJnZXQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9kby1pbmRleCcpXS5jb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gc2hvd1RvZG9PcHRpb25zKCkge1xuICAgIGNvbnN0IHRvZG9PcHRpb25CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1vcHRpb25zLWljb24nKTtcbiAgICBmb3IgKGNvbnN0IGJ1dHRvbiBvZiB0b2RvT3B0aW9uQnV0dG9uKSB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b2RvID0gZS50YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0b2RvLnF1ZXJ5U2VsZWN0b3IoJy50b2RvLW9wdGlvbnMtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAob3B0aW9ucy5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSA/IG9wdGlvbnMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJykgOiBvcHRpb25zLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9KVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb0RvTW9kYWwge1xuICAgIGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10b2RvLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgdG9nZ2xlTW9kYWxWaXNpYmlsaXR5KCkge1xuICAgICAgICB0aGlzLm1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIH1cblxuICAgIG9wZW5Nb2RhbChlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMudG9nZ2xlTW9kYWxWaXNpYmlsaXR5KCk7XG4gICAgfVxuXG4gICAgY2xvc2VNb2RhbChlKSB7XG4gICAgICAgIGxldCByZXZpZXdOb2RlID0gZS50YXJnZXQ7XG4gICAgICAgIGxldCBleGl0Rm9ybSA9IHRydWU7XG4gICAgICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdWJtaXQtdG9kby1idXR0b24nKSkge1xuICAgICAgICAgICAgd2hpbGUgKHJldmlld05vZGUgJiYgcmV2aWV3Tm9kZS5ub2RlTmFtZSAhPT0gJ0JPRFknKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJldmlld05vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCduZXctdG9kby1jb250YWluZXInKSkge1xuICAgICAgICAgICAgICAgICAgICBleGl0Rm9ybSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV2aWV3Tm9kZSA9IHJldmlld05vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXhpdEZvcm0gJiYgIXRoaXMubW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgICAgICAgdGhpcy5tb2RhbENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleGl0Rm9ybTtcbiAgICB9XG5cbiAgICBsb2FkTW9kYWxDb250ZW50KCkge1xuICAgICAgICAvL2RhdGVcbiAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb2RhdGUnKTtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBnZXRDdXJyZW50RGF0ZSgpO1xuICAgICAgICB0YXNrRGF0ZS5zZXRBdHRyaWJ1dGUoeydtaW4nOiBgJHtjdXJyZW50RGF0ZS55ZWFyfS0ke2N1cnJlbnREYXRlLm1vbnRofS0ke2N1cnJlbnREYXRlLmRheX1gLCAncmVxdWlyZWQnOiB0cnVlfSlcblxuICAgIH1cblxuICAgIGNsZWFyTW9kYWxDb250ZW50KCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb25hbWUnKS52YWx1ZSA9ICcnO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kb2Rlc2NyaXB0aW9uJykudmFsdWUgPSAnJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9kYXRlJykudmFsdWUgPSAnJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG90aW1lJykudmFsdWUgPSAnJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpLnZhbHVlID0gJyc7XG5cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnREYXRlKCkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICBpZiAobW9udGgudG9TdHJpbmcubGVuZ3RoIDwgMikgbW9udGggPSAnMCcgKyBtb250aDtcbiAgICByZXR1cm4geyB5ZWFyLCBtb250aCwgZGF5IH1cbn0iXSwibmFtZXMiOlsiTWFpbkNvbnRlbnQiLCJjb250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWFpbkNvbnRlbnRDb250YWluZXIiLCJ0b2Rvc2NvbnRhaW5lciIsImNvbnN0cnVjdG9yIiwibG9hZFRvZG9zIiwiYXJyIiwiaSIsInRoaXMiLCJpbm5lckhUTUwiLCJ0b2RvIiwidG9kb0NvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJjb21wbGV0ZSIsInRvZG9UaXRsZSIsInRleHRDb250ZW50IiwidGl0bGUiLCJ0b2RvRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsInRvZG9EYXRlIiwiZHVlRGF0ZSIsInNsaWNlIiwidG9kb1RpbWUiLCJ0aW1lIiwicHJvamVjdHMiLCJwcm9qZWN0TmFtZSIsImNvbXBsZXRlZCIsIm9wdGlvbnNNZW51Q29udGFpbmVyIiwib3B0aW9uc0NvbnRhaW5lciIsInJlbW92ZVRvZG8iLCJhcHBlbmQiLCJhZGRDb21wbGV0aW9uQnV0dG9uRXZlbnQiLCJjb21wbGV0aW9uQnV0dG9uIiwicXVlcnlTZWxlY3RvckFsbCIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY29udGFpbnMiLCJyZW1vdmUiLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwiZ2V0QXR0cmlidXRlIiwic2hvd1RvZG9PcHRpb25zIiwidG9kb09wdGlvbkJ1dHRvbiIsImNvbnNvbGUiLCJsb2ciLCJvcHRpb25zIiwiUHJvamVjdHNQYWdlIiwicHJvamVjdFRpdGxlIiwibG9hZFRpdGxlIiwiVG9EbyIsImxhbmRpbmdMb2FkZXIiLCJuYXYiLCJtYWluQ29udGVudCIsImRpbUJhY2tncm91bmQiLCJzdHlsZSIsImZpbHRlciIsInVuRGltQmFja2dyb3VuZCIsInJlbW92ZUF0dHJpYnV0ZSIsInRvZG9tb2RhbCIsIm1vZGFsQ29udGFpbmVyIiwidG9nZ2xlTW9kYWxWaXNpYmlsaXR5IiwidG9nZ2xlIiwib3Blbk1vZGFsIiwic3RvcFByb3BhZ2F0aW9uIiwiY2xvc2VNb2RhbCIsInJldmlld05vZGUiLCJleGl0Rm9ybSIsIm5vZGVOYW1lIiwibG9hZE1vZGFsQ29udGVudCIsInRhc2tEYXRlIiwiY3VycmVudERhdGUiLCJkYXRlIiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsImRheSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwidG9TdHJpbmciLCJsZW5ndGgiLCJnZXRDdXJyZW50RGF0ZSIsImNsZWFyTW9kYWxDb250ZW50IiwidmFsdWUiLCJ0b2Rvc0xpc3QiLCJuZXdUb2RvQnV0dG9uIiwic3VibWl0VG9kb0J1dHRvbiIsInByb2plY3RzQnV0dG9uIiwicHJvamVjdFNlbGVjdGlvbiIsImhvbWVCdXR0b24iLCJyZXNldE5ld1RvZG9Qcm9qZWN0U2VsZWN0aW9uIiwicHJvamVjdE5hbWVDb250YWluZXIiLCJhZGRSZW1vdmVUb2RvTGlzdGVuZXIiLCJyZW1vdmVCdXR0b25zIiwidG9kb2luZGV4Iiwic3BsaWNlIiwid2luZG93IiwicHJvamVjdFRvZG9zIiwiYSIsImNoZWNrVmFsaWRpdHkiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJyZXBvcnRWYWxpZGl0eSJdLCJzb3VyY2VSb290IjoiIn0=