<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Dude Clothing -</title>

</head>
<body>

	<div class="legend1" id="currencyForm">
		<form:select path="currencyList" items="${currencyList}">
		</form:select>
		<br /> Currency Name : <input type="text"><br /> Currency
		Rate : <input type="text">
	</div>

	<div class="legend1" id="accountForm">
		<form:select path="accountList" items="${accountList}">
		</form:select>
		<br /> Account : <input type="text"><br />
	</div>

	<div class="legend1" id="statusForm">
		<form:select path="statusList" items="${statusList}">
		</form:select>
		<br /> Status : <input type="text"><br />
	</div>

	<div class="legend1" id="brandForm">
		<form:select path="brandList" items="${brandList}">
		</form:select>
		<br /> Brand Name : <input type="text"><br />
	</div>
</body>
</html>