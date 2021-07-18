//변수 초기화
var title = document.getElementById('title');
var list = document.getElementById('list');
var li = list.getElementsByTagName('li');
var addBtn = document.getElementById('add-btn');


list.addEventListener('click',activeItem);
// for(var i=0; i< li.length; i++){
//     li[i].addEventListener('click',activeItem);
// }

function activeItem(event) {
    //해당 목록 클릭 시 제목 영역에 표시
    //클릭한 노드가 li이면
    if(event.target.nodeName == 'LI'){{
        title.innerHTML = event.target.innerText;
    }
    //목록 스타일 초기화
    for(var i = 0; i < event.target.parentNode.children.length; i++){
        event.target.parentNode.children[i].removeAttribute('class');
    }
    event.target.setAttribute('class', 'active');
}//end if
}; //end function

addBtn.addEventListener('click', function(){
    var txt = prompt('제목 입력');
    list.innerHTML+= '<li>' + txt + '</li>';
});