// 목록으로 버튼 클릭 시 "/" 이동 (GET 요청)

// location.href 속성을 사용하여 경로로 이동
const goToList = document.querySelector("#goToList");

// 목록으로 버튼이 클릭된 경우
goToList.addEventListener("click", () => {
  // "/" 메인페이지 요청(GET)
  location.href = "/";
});

// 할 일 상세 조회 페이지에서 쿼리스트링 값 얻어오기
// >> url 에서 얻어올 수 있음

// location.search : url 상의 쿼리스트링만 얻어오기(ex. ?todoNo=3)
// URLSearchParams () : 쿼리스트링을 객체형태로 다룰 수 있는 JS 내장 객체 
const todoNo = new URLSearchParams(location.search).get("todoNo");


// 완료 여부 변경
const completeBtn = document.querySelector("#completeBtn");
completeBtn.addEventListener("click", () => {

  // 현재 보고있는 Todo의 완료 여부를
  // O(true) <-> X(false)로  변경 요청하기 (GET)
  location.href = "/todo/complete?todoNo=" + todoNo;
                // /todo/complete?todoNo=3
});

// 삭제 버튼
const deleteBtn = document.querySelector("#deleteBtn");
deleteBtn.addEventListener("click", () => {
  
  // 정말 삭제할것인지 confirm()을 이용해서 확인
  // confirm() : 확인/취소 선택 가능한 알림창 띄우기
  // -> 확인(true) / 취소(false) 반환
  
  // 취소 클릭 시
  if( !confirm("정말 삭제하시겠습니까?") ) {
    return; // 함수 종료 -> 아래 코드 미실행
  }

  // 확인 클릭 시
  // /todo/delete?todoNo=3 삭제 요청 (GET)
  location.href = "/todo/delete?todoNo=" + todoNo;
                // /todo/delete?todoNo=3
});


// 수정 버튼 클릭 시
const updateBtn = document.querySelector("#updateBtn");
updateBtn.addEventListener("click", () => {
  location.href = "/todo/update?todoNo=" + todoNo;
});
