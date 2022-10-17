var v_thisDate = "thisDate";

var requestDate = {}; // name-space 빈 객체

requestDate.getParameter=function(p_date){ // date를 넘기면 value 리턴
    if(location.href.indexOf("?") == -1) return null;
    // location.href url 해당 부분 변경
    var v_queryString = location.href.split("?")[1];
    var v_queryValue = v_queryString.split("&");
    for(var i = 0; i < v_queryValue.length; i++) {
        var qv = v_queryValue[i].split("=");
        if(qv[0] == p_date) {
            return decodeURIComponent(qv[1]).replaceAll("+", " ");
        }
    }
    return null;  
}

// 같은 name 값으로 여러개 넘어오는 것을 처리하는 함수
requestDate.getParameterValues= function(p_date){
    if(location.href.indexOf("?") == -1) return null;
    // location.href url 해당 부분 변경
    var v_queryString = location.href.split("?")[1];    

    var v_values = [];
    var v_queryValue = v_queryString.split("&");
    for(var i = 0; i < v_queryValue.length; i++) {
        
        var qv = v_queryString[i].split("=")
        if(qv[0] == p_date) {
            v_values.push(decodeURIComponent(qv[1]).replaceAll("+", " "));
        }
    }
    if(!v_values.length) return null;
        return v_values;
}