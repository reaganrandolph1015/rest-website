(()=>{"use strict";function t(t,e){const n=document.createElement("button");n.setAttribute("id",t);const c=document.createElement("span");return c.textContent=e,n.appendChild(c),n.classList.add("tab"),n}const e=function(){const t=document.getElementById("tab-content");t.classList.add("flex-lay"),t.classList.remove("grid-lay"),t.textContent="";const e=function(){const t=document.createElement("section");t.classList.add("section");const e=document.createElement("h2");e.classList.add("section-title"),e.textContent="About",t.appendChild(e);const n=document.createElement("p");return n.classList.add("section-description"),n.textContent="Filler text content for about paragraph. (Will be updated later)",t.appendChild(n),t}();!function(t){const e=document.querySelector(".tab.active");e&&e.classList.remove("active"),document.getElementById("home").classList.add("active")}(),t.appendChild(e)};function n(t,e,n,c){const o=document.createElement("div");o.classList.add("food");const d=document.createElement("img");d.setAttribute("src",t),d.setAttribute("alt",n);const a=document.createElement("div");a.classList.add("description");const s=document.createElement("h2");s.textContent=e;const i=document.createElement("h3");return i.textContent=c,a.appendChild(s),a.appendChild(i),o.appendChild(d),o.appendChild(a),o}const c=function(){const t=document.getElementById("tab-content");t.classList.add("grid-lay"),t.classList.remove("flex-lay"),t.textContent="",function(t){const e=document.querySelector(".tab.active");e&&e.classList.remove("active"),document.getElementById("gallery").classList.add("active")}(),[n("https://cdn.pixabay.com/photo/2021/01/18/12/49/ice-cream-5928048_960_720.jpg","Icecream","Icecream","Great"),n("https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg","Pizza","Pizza","Good"),n("https://cdn.pixabay.com/photo/2017/01/24/20/30/soup-2006317_960_720.jpg","Soup","Soup","Decent"),n("https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg","Fish","Fish","Alright"),n("https://cdn.pixabay.com/photo/2017/02/14/17/23/united-kingdom-2066475_960_720.jpg","Lobster","Lobster","Bad")].forEach((e=>{t.appendChild(e)}))};function o(t,e){const n=document.createElement("section");n.classList.add("section");const c=document.createElement("h2");return c.classList.add("section-title"),c.textContent=t,n.appendChild(c),e.forEach((t=>{const e=document.createElement("p");e.classList.add("section-description"),e.textContent=t,n.appendChild(e)})),n}const d=function(){const t=document.getElementById("tab-content");t.classList.add("flex-lay"),t.classList.remove("grid-lay"),t.textContent="",function(t){const e=document.querySelector(".tab.active");e&&e.classList.remove("active"),document.getElementById("about").classList.add("active")}();const e=o("Phone:",["856-988-7892","556-987-8896"]),n=o("Address:",["1112 Golden Acre Street","5697 New Tulson Road"]);t.appendChild(e),t.appendChild(n)};(function(){const e=document.getElementById("content"),n=function(t,e){const n=document.createElement("header");n.setAttribute("id","header");const c=document.createElement("h1");return c.textContent="Good Eating",n.appendChild(c),n}();e.appendChild(n);const c=function(e){const n=document.createElement("nav");n.setAttribute("id","nav");const c=t("home","Home"),o=t("gallery","Gallery"),d=t("about","About");return n.appendChild(c),n.appendChild(o),n.appendChild(d),n}();e.appendChild(c);const o=function(t){const e=document.createElement("main");return e.setAttribute("id","tab-content"),e}();e.appendChild(o);const d=function(t,e){const n=document.createElement("footer");n.setAttribute("id","footer");const c=document.createElement("h3");return c.textContent="created by Reagan",n.appendChild(c),n}();e.appendChild(d)})(),e(),function(){const t=document.getElementById("home"),n=document.getElementById("gallery"),o=document.getElementById("about");t.addEventListener("click",e),n.addEventListener("click",c),o.addEventListener("click",d)}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBWUEsU0FBU0EsRUFBVUMsRUFBSUMsR0FDckIsTUFBTUMsRUFBTUMsU0FBU0MsY0FBYyxVQUNuQ0YsRUFBSUcsYUFBYSxLQUFNTCxHQUN2QixNQUFNTSxFQUFPSCxTQUFTQyxjQUFjLFFBS3BDLE9BSkFFLEVBQUtDLFlBQWNOLEVBQ25CQyxFQUFJTSxZQUFZRixHQUNoQkosRUFBSU8sVUFBVUMsSUFBSSxPQUVYUixFQ3VCVCxRQWRBLFdBQ0UsTUFBTVMsRUFBVVIsU0FBU1MsZUFBZSxlQUN4Q0QsRUFBUUYsVUFBVUMsSUFBSSxZQUN0QkMsRUFBUUYsVUFBVUksT0FBTyxZQUV6QkYsRUFBUUosWUFBYyxHQUV0QixNQUFNTyxFQXBDUixXQUNFLE1BQU1DLEVBQVFaLFNBQVNDLGNBQWMsV0FDckNXLEVBQU1OLFVBQVVDLElBQUksV0FFcEIsTUFBTU0sRUFBUWIsU0FBU0MsY0FBYyxNQUNyQ1ksRUFBTVAsVUFBVUMsSUFBSSxpQkFDcEJNLEVBQU1ULFlBQWMsUUFFcEJRLEVBQU1QLFlBQVlRLEdBRWxCLE1BQU1DLEVBQU9kLFNBQVNDLGNBQWMsS0FNcEMsT0FMQWEsRUFBS1IsVUFBVUMsSUFBSSx1QkFDbkJPLEVBQUtWLFlBQ0gsbUVBQ0ZRLEVBQU1QLFlBQVlTLEdBRVhGLEVBb0JjRyxJQWhCdkIsU0FBc0JsQixHQUNwQixNQUFNbUIsRUFBWWhCLFNBQVNpQixjQUFjLGVBQ3JDRCxHQUFXQSxFQUFVVixVQUFVSSxPQUFPLFVBRTFCVixTQUFTUyxlQWNaLFFBYkxILFVBQVVDLElBQUksVUFhdEJXLEdBRUFWLEVBQVFILFlBQVlNLElDaEN0QixTQUFTUSxFQUFVQyxFQUFLdEIsRUFBTXVCLEVBQUtDLEdBQ2pDLE1BQU1DLEVBQU92QixTQUFTQyxjQUFjLE9BQ3BDc0IsRUFBS2pCLFVBQVVDLElBQUksUUFDbkIsTUFBTWlCLEVBQU14QixTQUFTQyxjQUFjLE9BQ25DdUIsRUFBSXRCLGFBQWEsTUFBT2tCLEdBQ3hCSSxFQUFJdEIsYUFBYSxNQUFPbUIsR0FFeEIsTUFBTUksRUFBY3pCLFNBQVNDLGNBQWMsT0FDM0N3QixFQUFZbkIsVUFBVUMsSUFBSSxlQUUxQixNQUFNbUIsRUFBVzFCLFNBQVNDLGNBQWMsTUFDeEN5QixFQUFTdEIsWUFBY04sRUFFdkIsTUFBTTZCLEVBQVEzQixTQUFTQyxjQUFjLE1BU3JDLE9BUkEwQixFQUFNdkIsWUFBY2tCLEVBRXBCRyxFQUFZcEIsWUFBWXFCLEdBQ3hCRCxFQUFZcEIsWUFBWXNCLEdBRXhCSixFQUFLbEIsWUFBWW1CLEdBQ2pCRCxFQUFLbEIsWUFBWW9CLEdBRVZGLEVBaURULFFBOUNBLFdBQ0UsTUFBTWYsRUFBVVIsU0FBU1MsZUFBZSxlQUN4Q0QsRUFBUUYsVUFBVUMsSUFBSSxZQUN0QkMsRUFBUUYsVUFBVUksT0FBTyxZQUV6QkYsRUFBUUosWUFBYyxHQXRDeEIsU0FBc0JQLEdBQ3BCLE1BQU1tQixFQUFZaEIsU0FBU2lCLGNBQWMsZUFDckNELEdBQVdBLEVBQVVWLFVBQVVJLE9BQU8sVUFFMUJWLFNBQVNTLGVBbUNaLFdBbENMSCxVQUFVQyxJQUFJLFVBa0N0QixHQUVjLENBQ1pZLEVBQ0UsK0VBQ0EsV0FDQSxXQUNBLFNBRUZBLEVBQ0UsMkVBQ0EsUUFDQSxRQUNBLFFBRUZBLEVBQ0UsMEVBQ0EsT0FDQSxPQUNBLFVBRUZBLEVBQ0UsMkVBQ0EsT0FDQSxPQUNBLFdBRUZBLEVBQ0Usb0ZBQ0EsVUFDQSxVQUNBLFFBSUVTLFNBQVNMLElBQ2JmLEVBQVFILFlBQVlrQixPQ25FeEIsU0FBU00sRUFBY0MsRUFBTUMsR0FDM0IsTUFBTUMsRUFBVWhDLFNBQVNDLGNBQWMsV0FDdkMrQixFQUFRMUIsVUFBVUMsSUFBSSxXQUV0QixNQUFNTSxFQUFRYixTQUFTQyxjQUFjLE1BWXJDLE9BWEFZLEVBQU1QLFVBQVVDLElBQUksaUJBQ3BCTSxFQUFNVCxZQUFjMEIsRUFDcEJFLEVBQVEzQixZQUFZUSxHQUVwQmtCLEVBQUtILFNBQVNLLElBQ1osTUFBTW5CLEVBQU9kLFNBQVNDLGNBQWMsS0FDcENhLEVBQUtSLFVBQVVDLElBQUksdUJBQ25CTyxFQUFLVixZQUFjNkIsRUFDbkJELEVBQVEzQixZQUFZUyxNQUdma0IsRUF3QlQsUUFyQkEsV0FDRSxNQUFNeEIsRUFBVVIsU0FBU1MsZUFBZSxlQUN4Q0QsRUFBUUYsVUFBVUMsSUFBSSxZQUN0QkMsRUFBUUYsVUFBVUksT0FBTyxZQUN6QkYsRUFBUUosWUFBYyxHQS9CeEIsU0FBc0JQLEdBQ3BCLE1BQU1tQixFQUFZaEIsU0FBU2lCLGNBQWMsZUFDckNELEdBQVdBLEVBQVVWLFVBQVVJLE9BQU8sVUFFMUJWLFNBQVNTLGVBNEJaLFNBM0JMSCxVQUFVQyxJQUFJLFVBMkJ0QixHQUVBLE1BQU0yQixFQUFpQkwsRUFBYyxTQUFVLENBQzdDLGVBQ0EsaUJBR0lNLEVBQWlCTixFQUFjLFdBQVksQ0FDL0MsMEJBQ0EseUJBR0ZyQixFQUFRSCxZQUFZNkIsR0FDcEIxQixFQUFRSCxZQUFZOEIsS0hhdEIsV0FDRSxNQUFNM0IsRUFBVVIsU0FBU1MsZUFBZSxXQUVsQzJCLEVBNURSLFNBQXNCdkMsRUFBSUMsR0FDeEIsTUFBTXNDLEVBQVNwQyxTQUFTQyxjQUFjLFVBQ3RDbUMsRUFBT2xDLGFBQWEsS0EwRFEsVUF6RDVCLE1BQU1tQyxFQUFPckMsU0FBU0MsY0FBYyxNQUlwQyxPQUhBb0MsRUFBS2pDLFlBd0RpQyxjQXZEdENnQyxFQUFPL0IsWUFBWWdDLEdBRVpELEVBcURRRSxHQUNmOUIsRUFBUUgsWUFBWStCLEdBRXBCLE1BQU1HLEVBeENSLFNBQW1CMUMsR0FDakIsTUFBTTBDLEVBQU12QyxTQUFTQyxjQUFjLE9BQ25Dc0MsRUFBSXJDLGFBQWEsS0FzQ0ssT0FwQ3RCLE1BQU1zQyxFQUFVNUMsRUFBVSxPQUFRLFFBQzVCNkMsRUFBYTdDLEVBQVUsVUFBVyxXQUNsQzhDLEVBQVc5QyxFQUFVLFFBQVMsU0FNcEMsT0FKQTJDLEVBQUlsQyxZQUFZbUMsR0FDaEJELEVBQUlsQyxZQUFZb0MsR0FDaEJGLEVBQUlsQyxZQUFZcUMsR0FFVEgsRUE0QktJLEdBQ1puQyxFQUFRSCxZQUFZa0MsR0FFcEIsTUFBTUssRUEzQlIsU0FBb0IvQyxHQUNsQixNQUFNZ0QsRUFBTzdDLFNBQVNDLGNBQWMsUUFHcEMsT0FGQTRDLEVBQUszQyxhQUFhLEtBeUJZLGVBdkJ2QjJDLEVBdUJZQyxHQUNuQnRDLEVBQVFILFlBQVl1QyxHQUVwQixNQUFNRyxFQXRCUixTQUFzQmxELEVBQUlDLEdBQ3hCLE1BQU1pRCxFQUFTL0MsU0FBU0MsY0FBYyxVQUN0QzhDLEVBQU83QyxhQUFhLEtBb0JRLFVBbkI1QixNQUFNOEMsRUFBS2hELFNBQVNDLGNBQWMsTUFJbEMsT0FIQStDLEVBQUc1QyxZQWtCbUMsb0JBakJ0QzJDLEVBQU8xQyxZQUFZMkMsR0FFWkQsRUFlUUUsR0FDZnpDLEVBQVFILFlBQVkwQyxJSWxEcEIsR0FDQSxJQWZGLFdBR0UsTUFBTVAsRUFBVXhDLFNBQVNTLGVBQWUsUUFDbENnQyxFQUFhekMsU0FBU1MsZUFBZSxXQUNyQ2lDLEVBQVcxQyxTQUFTUyxlQUFlLFNBRXpDK0IsRUFBUVUsaUJBQWlCLFFBQVMsR0FDbENULEVBQVdTLGlCQUFpQixRQUFTLEdBQ3JDUixFQUFTUSxpQkFBaUIsUUFBUyxHQU9uQ0MsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3Qtd2Vic2l0ZS8uL3NyYy9tb2R1bGVzL2luaXRpYWwtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0LXdlYnNpdGUvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3Qtd2Vic2l0ZS8uL3NyYy9tb2R1bGVzL2dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vcmVzdC13ZWJzaXRlLy4vc3JjL21vZHVsZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdC13ZWJzaXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNyZWF0ZXMgaGVhZGVyIGFuZCBzZXRzIGlkICYgdGV4dFxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKGlkLCB0ZXh0KSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBoZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGxvZ28udGV4dENvbnRlbnQgPSB0ZXh0O1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuLy8gYWxsb3dzIHlvdSB0byBjcmVhdGUgYSBidXR0b24gYW5kIHNldCBpZCBhbmQgdGV4dFxuZnVuY3Rpb24gY3JlYXRlQnRuKGlkLCB0ZXh0KSB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG4uc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGJ0bi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuXG4gIHJldHVybiBidG47XG59XG5cbi8vIGNyZWF0ZXMgTmF2aWdhdGlvbiBiYXJcbmZ1bmN0aW9uIGNyZWF0ZU5hdihpZCkge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgbmF2LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG5cbiAgY29uc3QgaG9tZUJ0biA9IGNyZWF0ZUJ0bignaG9tZScsICdIb21lJyk7XG4gIGNvbnN0IGdhbGxlcnlCdG4gPSBjcmVhdGVCdG4oJ2dhbGxlcnknLCAnR2FsbGVyeScpO1xuICBjb25zdCBhYm91dEJ0biA9IGNyZWF0ZUJ0bignYWJvdXQnLCAnQWJvdXQnKTtcblxuICBuYXYuYXBwZW5kQ2hpbGQoaG9tZUJ0bik7XG4gIG5hdi5hcHBlbmRDaGlsZChnYWxsZXJ5QnRuKTtcbiAgbmF2LmFwcGVuZENoaWxkKGFib3V0QnRuKTtcblxuICByZXR1cm4gbmF2O1xufVxuXG4vLyBjcmVhdGVzIE1haW4gc2VjdGlvbiBvZiB3ZWIgcGFnZVxuZnVuY3Rpb24gY3JlYXRlTWFpbihpZCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBtYWluLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG5cbiAgcmV0dXJuIG1haW47XG59XG5cbi8vIGNyZWF0ZXMgZm9vdGVyIGFuZCBzZXRzIGlkIGFuZCB0ZXh0IGNvbnRlbnRcbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcihpZCwgdGV4dCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgZm9vdGVyLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgaDMudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoaDMpO1xuXG4gIHJldHVybiBmb290ZXI7XG59XG5cbmZ1bmN0aW9uIGxvYWRQYWdlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgLy8gaGVhZGVyXG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcignaGVhZGVyJywgJ0dvb2QgRWF0aW5nJyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgLy8gbmF2XG4gIGNvbnN0IG5hdiA9IGNyZWF0ZU5hdignbmF2Jyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2KTtcbiAgLy8gdGFiIGNvbnRlbnRcbiAgY29uc3QgdGFiQ29udGVudCA9IGNyZWF0ZU1haW4oJ3RhYi1jb250ZW50Jyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFiQ29udGVudCk7XG4gIC8vIGZvb3RlclxuICBjb25zdCBmb290ZXIgPSBjcmVhdGVGb290ZXIoJ2Zvb3RlcicsICdjcmVhdGVkIGJ5IFJlYWdhbicpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRQYWdlO1xuIiwiZnVuY3Rpb24gY3JlYXRlQWJvdXQoKSB7XG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBhYm91dC5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uJyk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLXRpdGxlJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ0Fib3V0JztcblxuICBhYm91dC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcGFyYS5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWRlc2NyaXB0aW9uJyk7XG4gIHBhcmEudGV4dENvbnRlbnQgPVxuICAgICdGaWxsZXIgdGV4dCBjb250ZW50IGZvciBhYm91dCBwYXJhZ3JhcGguIChXaWxsIGJlIHVwZGF0ZWQgbGF0ZXIpJztcbiAgYWJvdXQuYXBwZW5kQ2hpbGQocGFyYSk7XG5cbiAgcmV0dXJuIGFib3V0O1xufVxuXG4vLyBidXR0b24gdG8gY2hhbmdlIGNsYXNzIG9mIG90aGVyIGJ1dHRvbnNcbmZ1bmN0aW9uIHNldEFjdGl2ZUJ0bihpZCkge1xuICBjb25zdCBhY3RpdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiLmFjdGl2ZScpO1xuICBpZiAoYWN0aXZlQnRuKSBhY3RpdmVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn1cblxuLy8gYWRkcyBzdHlsaW5nIG9mIGhvbWUgdG8gd2VicGFnZVxuZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLWNvbnRlbnQnKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdmbGV4LWxheScpO1xuICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2dyaWQtbGF5Jyk7XG5cbiAgY29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuXG4gIGNvbnN0IGFib3V0U2VjdGlvbiA9IGNyZWF0ZUFib3V0KCk7XG5cbiAgc2V0QWN0aXZlQnRuKCdob21lJyk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dFNlY3Rpb24pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTtcbiIsImZ1bmN0aW9uIHNldEFjdGl2ZUJ0bihpZCkge1xuICBjb25zdCBhY3RpdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiLmFjdGl2ZScpO1xuICBpZiAoYWN0aXZlQnRuKSBhY3RpdmVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW1nKHNyYywgdGV4dCwgYWx0LCBzaWRlKSB7XG4gIGNvbnN0IGZvb2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9vZC5jbGFzc0xpc3QuYWRkKCdmb29kJyk7XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBzcmMpO1xuICBpbWcuc2V0QXR0cmlidXRlKCdhbHQnLCBhbHQpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG5cbiAgY29uc3QgZm9vZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBmb29kTmFtZS50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgY29uc3Qgc2lkZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBzaWRlcy50ZXh0Q29udGVudCA9IHNpZGU7XG5cbiAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZm9vZE5hbWUpO1xuICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChzaWRlcyk7XG5cbiAgZm9vZC5hcHBlbmRDaGlsZChpbWcpO1xuICBmb29kLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICByZXR1cm4gZm9vZDtcbn1cblxuZnVuY3Rpb24gbG9hZEdhbGxlcnkoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLWNvbnRlbnQnKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdncmlkLWxheScpO1xuICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ZsZXgtbGF5Jyk7XG5cbiAgY29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuICBzZXRBY3RpdmVCdG4oJ2dhbGxlcnknKTtcblxuICBjb25zdCBmb29kcyA9IFtcbiAgICBjcmVhdGVJbWcoXG4gICAgICAnaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAyMS8wMS8xOC8xMi80OS9pY2UtY3JlYW0tNTkyODA0OF85NjBfNzIwLmpwZycsXG4gICAgICAnSWNlY3JlYW0nLFxuICAgICAgJ0ljZWNyZWFtJyxcbiAgICAgICdHcmVhdCdcbiAgICApLFxuICAgIGNyZWF0ZUltZyhcbiAgICAgICdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE3LzEyLzA5LzA4LzE4L3BpenphLTMwMDczOTVfOTYwXzcyMC5qcGcnLFxuICAgICAgJ1BpenphJyxcbiAgICAgICdQaXp6YScsXG4gICAgICAnR29vZCdcbiAgICApLFxuICAgIGNyZWF0ZUltZyhcbiAgICAgICdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE3LzAxLzI0LzIwLzMwL3NvdXAtMjAwNjMxN185NjBfNzIwLmpwZycsXG4gICAgICAnU291cCcsXG4gICAgICAnU291cCcsXG4gICAgICAnRGVjZW50J1xuICAgICksXG4gICAgY3JlYXRlSW1nKFxuICAgICAgJ2h0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTQvMTEvMDUvMTUvNTcvc2FsbW9uLTUxODAzMl85NjBfNzIwLmpwZycsXG4gICAgICAnRmlzaCcsXG4gICAgICAnRmlzaCcsXG4gICAgICAnQWxyaWdodCdcbiAgICApLFxuICAgIGNyZWF0ZUltZyhcbiAgICAgICdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE3LzAyLzE0LzE3LzIzL3VuaXRlZC1raW5nZG9tLTIwNjY0NzVfOTYwXzcyMC5qcGcnLFxuICAgICAgJ0xvYnN0ZXInLFxuICAgICAgJ0xvYnN0ZXInLFxuICAgICAgJ0JhZCdcbiAgICApLFxuICBdO1xuXG4gIGZvb2RzLmZvckVhY2goKGZvb2QpID0+IHtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb2QpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEdhbGxlcnk7XG4iLCJmdW5jdGlvbiBzZXRBY3RpdmVCdG4oaWQpIHtcbiAgY29uc3QgYWN0aXZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYi5hY3RpdmUnKTtcbiAgaWYgKGFjdGl2ZUJ0bikgYWN0aXZlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXG4gIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gIGhvbWVCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlY3Rpb24obmFtZSwgZGF0YSkge1xuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24nKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24tdGl0bGUnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBkYXRhLmZvckVhY2goKGQpID0+IHtcbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBhcmEuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1kZXNjcmlwdGlvbicpO1xuICAgIHBhcmEudGV4dENvbnRlbnQgPSBkO1xuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQocGFyYSk7XG4gIH0pO1xuXG4gIHJldHVybiBzZWN0aW9uO1xufVxuXG5mdW5jdGlvbiBsb2FkQWJvdXQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLWNvbnRlbnQnKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdmbGV4LWxheScpO1xuICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2dyaWQtbGF5Jyk7XG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgc2V0QWN0aXZlQnRuKCdhYm91dCcpO1xuXG4gIGNvbnN0IGNvbnRhY3RTZWN0aW9uID0gY3JlYXRlU2VjdGlvbignUGhvbmU6JywgW1xuICAgICc4NTYtOTg4LTc4OTInLFxuICAgICc1NTYtOTg3LTg4OTYnLFxuICBdKTtcblxuICBjb25zdCBhZGRyZXNzU2VjdGlvbiA9IGNyZWF0ZVNlY3Rpb24oJ0FkZHJlc3M6JywgW1xuICAgICcxMTEyIEdvbGRlbiBBY3JlIFN0cmVldCcsXG4gICAgJzU2OTcgTmV3IFR1bHNvbiBSb2FkJyxcbiAgXSk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0U2VjdGlvbik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkcmVzc1NlY3Rpb24pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQWJvdXQ7XG4iLCJpbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi9tb2R1bGVzL2luaXRpYWwtcGFnZSc7XG5pbXBvcnQgbG9hZEhvbWUgZnJvbSAnLi9tb2R1bGVzL2hvbWUnO1xuaW1wb3J0IGxvYWRHYWxsZXJ5IGZyb20gJy4vbW9kdWxlcy9nYWxsZXJ5JztcbmltcG9ydCBsb2FkQWJvdXQgZnJvbSAnLi9tb2R1bGVzL2Fib3V0JztcblxuaW5pdCgpO1xuXG5mdW5jdGlvbiBuYXZFdmVudHMoKSB7XG4gIC8vIGFsbG93cyB1c2VycyB0byBuYXZpZ2F0ZSB3ZWJzaXRlIGJ5IGNsaWNraW5nIHRhYnNcbiAgLy8gZG9jdW1lbnQgc2VsZWN0b3JzXG4gIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpO1xuICBjb25zdCBnYWxsZXJ5QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbGxlcnknKTtcbiAgY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQnKTtcbiAgLy8gZXZlbnQgbGlzdGVuZXJzXG4gIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkSG9tZSk7XG4gIGdhbGxlcnlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkR2FsbGVyeSk7XG4gIGFib3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZEFib3V0KTtcbn1cblxuLy8gZnVuY3Rpb24gdG8gaW5pdGlhbGl6ZSB3ZWJwYWdlXG5mdW5jdGlvbiBpbml0KCkge1xuICBsb2FkUGFnZSgpO1xuICBsb2FkSG9tZSgpO1xuICBuYXZFdmVudHMoKTtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVCdG4iLCJpZCIsInRleHQiLCJidG4iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzcGFuIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImNsYXNzTGlzdCIsImFkZCIsImNvbnRlbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZSIsImFib3V0U2VjdGlvbiIsImFib3V0IiwidGl0bGUiLCJwYXJhIiwiY3JlYXRlQWJvdXQiLCJhY3RpdmVCdG4iLCJxdWVyeVNlbGVjdG9yIiwic2V0QWN0aXZlQnRuIiwiY3JlYXRlSW1nIiwic3JjIiwiYWx0Iiwic2lkZSIsImZvb2QiLCJpbWciLCJkZXNjcmlwdGlvbiIsImZvb2ROYW1lIiwic2lkZXMiLCJmb3JFYWNoIiwiY3JlYXRlU2VjdGlvbiIsIm5hbWUiLCJkYXRhIiwic2VjdGlvbiIsImQiLCJjb250YWN0U2VjdGlvbiIsImFkZHJlc3NTZWN0aW9uIiwiaGVhZGVyIiwibG9nbyIsImNyZWF0ZUhlYWRlciIsIm5hdiIsImhvbWVCdG4iLCJnYWxsZXJ5QnRuIiwiYWJvdXRCdG4iLCJjcmVhdGVOYXYiLCJ0YWJDb250ZW50IiwibWFpbiIsImNyZWF0ZU1haW4iLCJmb290ZXIiLCJoMyIsImNyZWF0ZUZvb3RlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJuYXZFdmVudHMiXSwic291cmNlUm9vdCI6IiJ9