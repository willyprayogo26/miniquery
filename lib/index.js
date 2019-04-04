// Release 0
var SweetSelector = (function(){
    return {
        select: function(target){
            if(target[0] == '#') {
                return document.querySelector(target);
            } else {
                return document.querySelectorAll(target);
            }
        }
    };
})();

// Release 1
var DOM = (function() {
    return {
        hide: function(target) {
            var div = SweetSelector.select(target);
            if (div.length) {
                div.forEach(t => {
                    t.style.display = 'none'
                })
            } else {
                div.style.display = 'none'
            }
        },
        show: function(target) {
            var div = SweetSelector.select(target);
            if (div.length) {
                div.forEach(t => {
                    t.style.display = 'block'
                })
            } else {
                div.style.display = 'block'
            }
        },
        addClass: function(target, newClass) {
            var div = SweetSelector.select(target);
            div.forEach(t => {
                return t.classList.add(newClass);
            })
        },
        removeClass: function(target, oldClass) {
            var div = SweetSelector.select(target);
            div.forEach(t => {
                return t.classList.remove(oldClass);
            })
        }
    };
})();

// Release 2
var EventDispatcher = (function(){
    return{
      on: function(target, event_name, anonymousFunction){
        var div = SweetSelector.select(target);
        div.forEach(t => {
            t.addEventListener(event_name, anonymousFunction);
        })
      },
  
      trigger: function(target, event_name){
        var div = SweetSelector.select(target);
        var event = new Event(event_name)
        div.forEach(t => {
            t.dispatchEvent(event);
        })
      }
    }
})();

// Release 3
var AjaxWrapper = {
    request: function(params) {
        var request = new XMLHttpRequest();
        request.open(params.type, params.url, true);
        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
            var data = request.responseText
            document.getElementById("test").innerHTML = data
            params.success(data)
            } else {
                params.fail()
            }
        }
        request.onerror = function() {
        }
        request.send()
    }
}