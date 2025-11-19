<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>SKT KT LG Let's go</title>
</head>
<body>
	<h1>통신3사에서 유출당한 개인정보 페이지입니다.</h1>
	
	<h3>입력되어 전달된 값들</h3>
	
	<ul>
		<li>ID : ${param.inputId}</li>
		<li>PW : ${param.inputPw}</li>
		<li>PW확인 : ${param.inputPwCheck}</li>
		<li>이름 : ${param.inputName}</li>
		<li>나이 : ${param.inputAge}</li>
	</ul>
	
	<%-- 비밀번호가 일치하는 경우 --%>
	<c:if test="${param.inputPw == param.inputPwCheck}">
		<h1 style="color:green;">유출 성공</h1>
	</c:if>
	
	<c:if test="${param.inputPw != param.inputPwCheck}">
		<h1 style="color:red;">비밀번호 불일치</h1>
	</c:if>
</body>
</html>