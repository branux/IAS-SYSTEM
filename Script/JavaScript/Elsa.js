var timerID = null;
var timerRunning = false;
var old_minutes = 70;
var minutes_count = 30; //long for time (in minutes)

function stopclock (){
        if(timerRunning)
                clearTimeout(timerID);
        timerRunning = false;
}

function showtime (var_status) {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds()
        var timeValue = "" + ((hours >12) ? hours -12 :hours)
        timeValue += ((minutes < 10) ? ":0" : ":") + minutes
        timeValue += ((seconds < 10) ? ":0" : ":") + seconds
        timeValue += (hours >= 12) ? " P.M." : " A.M."
		if(parseInt(old_minutes) != parseInt(minutes)){
			old_minutes = minutes
			minutes_count = minutes_count - 1
			window.status = minutes_count + " minutes remaining" ;
			if(parseInt(minutes_count)== 0){
				if (var_status != 1){
					//top.location.href="../am_login.aspx"
					top.location.href="../am_logout.aspx"
					am_logout.aspx
					//flyto("../am_logout.asp");
				}
				else{
					top.location.href="../am_logout.aspx"
				}
			}
		}
        timerID = setTimeout("showtime(" + var_status + ")",1000);
        timerRunning = true;
}

function startclock () {
        // Make sure the clock is stopped
        stopclock();
        showtime(0);
}

function startclock_upd () {
        // Make sure the clock is stopped
        stopclock();
        showtime(1);
}

function numbersonly(){
	if (event.keyCode<48||event.keyCode>57){
		return false;
	} else{
		return true;
	}	
}
function validchar(){
	if ((event.keyCode > 39 && event.keyCode < 58) || (event.keyCode > 96 && event.keyCode < 123) || (event.keyCode > 64 && event.keyCode < 91) || (event.keyCode > 35 && event.keyCode < 39)){
		return true;
	} else{
		return false;
	}	
}
function decimalonly(){
	if ((event.keyCode>47&&event.keyCode<59) || (event.keyCode==46)){
		return true;
	} else{
		return false;
	}
}
function fback() 
{
					history.go(-1);
					return false;
}	
function fConfirm() 
{
	if (window.confirm("Are you sure want to delete this record?")) 
		return true;
	else
		return false;
}
	function Close(){
				window.close();
			}
function DeleteConfirm(){
if (window.confirm("Are you sure want to delete this record ?"))
	return true;
else 
	return false;
}


function fclose(){
 window.close() ; 
}
var ErrMsg = "You Are Not Authorize";

//function disableRightClick(btnClick)
//{
//if (navigator.appName == "Netscape" && btnClick.which == 3) // check for netscape and right click
//{ 
//alert(ErrMsg);
//return false;
//}
//else if (navigator.appName =="Microsoft Internet Explorer" && event.button == 2) // for IE and Right Click
//{
//alert(ErrMsg);
//return false;
//}
//}

//document.onmousedown = disableRightClick;
history.forward(1);
var message="You Are Not Authorize";

function clickIE4()
{
	if (event.button==2)
	{
		alert(message);
		return false;
	}
}

function clickNS4(e)
{
	if (document.layers||document.getElementById&&!document.all)
	{
		if (e.which==2||e.which==3)
		{
			alert(message);
			return false;
		}
	}
}

if (document.layers)
{
	document.captureEvents(Event.MOUSEDOWN);
	document.onmousedown=clickNS4;
}
else if (document.all&&!document.getElementById)
{
	document.onmousedown=clickIE4;
}

document.oncontextmenu=new Function("alert(message);return false")


function keyhandler(e) {
    if (document.layers)
        Key = e.which;
    else
 
        Key = window.event.keyCode;
 //alert(Key);
    if (((Key>39) && (Key<58)) ||
 ((Key>96) && (Key<123)) ||
 ((Key>63) && (Key<91)) ||
 (Key==95) ||
 (Key==38) ||
 (Key==32) ||
 (Key==37) ||
 (Key==13) ||
 (Key==8) ||
 (Key==9))
 {
  return true;
 }
  if (!e) e=window.event;
 
 return false;
}
document.onkeypress = keyhandler;
function checkKP() {
	if (event.ctrlKey) {
		if ((event.keyCode==78) || (event.keyCode==104))
			event.returnValue = false;	
	}
}
var submitcount=0;
function checksubmit()
{
	if (submitcount == 0){
		submitcount++;
		return true;
	}else {
		var sErrMsgNull = 'Your Transaction Has Been Process, Please Be Patient.';
		alert (sErrMsgNull);
		return false;
	}
}

function disablebackspace() {
  if (window.focus) window.focus();
  document.onkeydown=catchbackspace;
  document.onkeyup=catchbackspace;
}

function catchbackspace() {
  if (!e) e=window.event;
  if (e.keyCode==8){
    alert("Backspace key was pressed.");
    return false;
  }
}

			var oInput;
			var oHidden;
			var oValidasi;
			
			function formatNumber(pValue){
			    var strValue = '';
			    var fltValue = 0;

				while (pValue.indexOf(",") > 0){ 
						pValue = pValue.replace(",","");
				}	
				if(isNaN(pValue)) {
					lStrValue=0;			
				} else {
					pValue = parseFloat(pValue);
					if (isNaN(pValue)){
						pValue=0;
						lStrValue=0;
					} else {		
	
						var lArrPre = pValue.toString().split('.')
						var lStrValue = '';
						var lBytLength = 0;
						
						
							
							lBytLength = lArrPre[0].length - 3;
					
						while (lBytLength > 0){
							lStrValue = ',' + lArrPre[0].substr(lBytLength, 3) + lStrValue;
							lBytLength -= 3;
						}
						
						lBytLength += 3;
						
						if(pValue  < 0) 
						{
							if (lBytLength == 1)
							 {
								lStrValue = '-' + lStrValue.substr(1, lStrValue.length) ;
							 } 
							else
							{
								lStrValue = lArrPre[0].substr(0, lBytLength) + lStrValue;
							}
							
							
						}
						 else 
						{
							lStrValue = lArrPre[0].substr(0, lBytLength) + lStrValue;
						}
						
						if (lArrPre.length == 2){
							lStrValue += '.' + lArrPre[1];
						}
					}

				}
				return lStrValue;
			}
	
			function formatValue(pInput, pHidden, pValidasi){
				var oInput = eval('document.forms[0].' + pInput);
				var oHidden = eval('document.forms[0].' + pHidden);
				var oValidasi = eval('document.forms[0].' + pValidasi);
				
				var total = oInput.value;	
				while (total.indexOf(",") > 0){ 
						total = total.replace(",","");
				}	
				oInput.value = formatNumber(total);	
				total = oInput.value;	
				while (total.indexOf(",") > 0){ 
						total = total.replace(",","");
				}
				oHidden.value = total;
				oValidasi.value = total;

			}
				
			function clearFormatValue(pInput){
				var oInput = eval('document.forms[0].' + pInput);
			
				
				var total = oInput.value;
				while (total.indexOf(",") > 0){ 
						total = total.replace(",","");
				}	
				oInput.value = total;
			}
			function blurDummy()
			{
				document.forms[0].txtInputDummy.focus();
				document.forms[0].txtInputDummy.blur();
			}

			function OpenWinPOViewExtend(pCustID,pAgreementNo,pCustName,pBranchID, pApplicationID, pPONo, pSupplierID, pStyle){
				window.open(ServerName + App  + '/AccAcq/Credit/CreditProcess/POViewforExtend.aspx?CustID=' + pCustID + '&AgreementNo=' + pAgreementNo + '&CustName=' + pCustName + '&BranchID=' + pBranchID + '&ApplicationID=' + pApplicationID + '&PONo=' + pPONo + '&SupplierID=' + pSupplierID + '&style=' + pStyle, 'UserLookup', 'left=0, top=0, width=800, height=600, menubar=0, scrollbars=yes');
				}

  			function OpenWinPDCView(PDCReceiptNo,branchid,flagfile,Girono){
					window.open(ServerName + App +  '/AccMnt/PDC/PDCRInquiryView.aspx?PDCReceiptNo=' + PDCReceiptNo + '&branchid=' + branchid + '&flagfile=' + flagfile  , 'PDC', 'left=0, top=0, width=700, height=600, menubar=0,scrollbars=1');
					}
			function OpenWinGiroNo(pGiroNo,pPDCReceiptNo,pbranchid,pbankid,pgiroseqno,pflagfile){
					window.open(ServerName + App +  '/AccMnt/PDC/PDCInquiryDetail.aspx?GiroNo=' + pGiroNo + '&PDCReceiptNo=' + pPDCReceiptNo + '&branchid=' + pbranchid + '&bankid=' + pbankid + '&giroseqno=' + pgiroseqno + '&flagfile=' + pflagfile , null, 'left=0, top=0, width=700, height=600, menubar=0,scrollbars=1');
				}
			function OpenWinPDC(GiroNo,PDCReceiptNo,branchid,bankid,giroseqno,flagfile){
					window.open(ServerName + App +  '/AccMnt/PDC/PDCNewInquiryDetail.aspx?GiroNo=' + GiroNo + '&PDCReceiptNo=' + PDCReceiptNo + '&branchid=' + branchid + '&bankid=' + bankid + '&giroseqno=' + giroseqno + '&flagfile=' + flagfile , null, 'left=0, top=0, width=700, height=600, menubar=0,scrollbars=1');
					}

			function OpenWinApplication(pApplicationID,pStyle){				
				window.open(ServerName + App + '/AccAcq/Credit/CreditProcess/NewApplication/ViewApplication.aspx?style=' + pStyle + '&ApplicationID=' + pApplicationID, 'UserLookup', 'left=0, top=0, width=800, height=600, menubar=0, scrollbars=yes');
				}
			
			function OpenWinEmployee(pBranchID,pAOID,pStyle){			
				window.open(ServerName + App + '/Setting/Organization/EmployeeView.aspx?style=' + pStyle + '&BranchID=' + pBranchID + '&EmployeeID=' + pAOID, 'Employee', 'left=0, top=0, width=800, height=600, menubar=0, scrollbars=yes');
				}
				
			function OpenWinCustomer(pID,pStyle){						
					window.open(ServerName + App + '/AccAcq/Credit/ViewPersonalCustomer.aspx?CustomerID=' + pID  + '&style=' + pStyle, 'Customer', 'left=0, top=0, width=800, height=600, menubar=0, scrollbars=yes');
				}
			
			function OpenWinAgreementNo(pApplicationId,pStyle){
					window.open(ServerName + App + '/AccAcq/Credit/ViewStatementOfAccount.aspx?ApplicationId=' + pApplicationId  + '&style=' + pStyle, 'AgreementNo', 'left=0, top=0, width=800, height=600, menubar=0, scrollbars=yes');
				}

			function OpenViewRequestNoRefund(pBranchID,pRequestNo,pStyle){
					window.open(ServerName + App + '/AccMnt/Refund/Advance/ViewRefundAdvance.aspx?BranchID=' + pBranchID + '&RequestNo=' + pRequestNo + '&style=' + pStyle, 'ViewRequestNo', 'left=0, top=0, width=900, height=700, menubar=0, scrollbars=yes');
				}

			function OpenAgreementNo(Style, ApplicationId){		
					window.open(ServerName + App +  '/AccAcq/Credit/ViewStatementOfAccount.aspx?Style=' + Style + '&ApplicationId=' + ApplicationId, 'Agreement', 'left=0, top=0, width=800, height=600, menubar=0,scrollbars=1');
			}							
			function OpenApplicationId(Style, ApplicationId){	
					window.open(ServerName + App +  '/AccAcq/Credit/CreditProcess/NewApplication/ViewApplication.aspx?Style=' + Style + '&ApplicationId=' + ApplicationId, null, 'left=0, top=0, width=800, height=600, menubar=0, scrollbars=1');
			}												
			function OpenCustomer(Style, CustomerId){		
					window.open(ServerName + App +  '/AccAcq/Credit/ViewPersonalCustomer.aspx?Style=' + Style + '&CustomerId=' + CustomerId, 'Personal', 'left=0, top=0, width=800, height=600, menubar=0,scrollbars=1');
			}
			function OpenViewApSupplier(pStyle, pAccountPayableNo, pBranchid,pApplicationid){			
					window.open(ServerName + App +  '/Finance/AccountPayable/ViewAPSupplier.aspx?Style=' + pStyle + '&AccountPayableNo=' + pAccountPayableNo + '&Applicationid=' +pApplicationid +'&Branchid=' + pBranchid, 'AccountPayable', 'left=50, top=50, width=900, height=600, menubar=0,scrollbars=1');
			}
			function OpenViewApInsurance(pStyle, pApplicationID, pBranchid,pAPNo){			
					window.open(ServerName + App +  '/Insurance/ViewAPInsurance.aspx?Style=' + pStyle + '&ApplicationID=' + pApplicationID + '&AccountPayableNo=' + pAPNo +'&Branchid=' + pBranchid, 'Insur', 'left=50, top=50, width=900, height=600, menubar=0,scrollbars=1');
			}
			function OpenViewApLifeInsurance(pStyle, pApplicationID, pBranchid,pAPNo){			
					window.open(ServerName + App +  '/Insurance/ViewAPLifeInsurance.aspx?Style=' + pStyle + '&ApplicationID=' + pApplicationID + '&AccountPayableNo=' + pAPNo +'&Branchid=' + pBranchid, 'Insur', 'left=50, top=50, width=900, height=600, menubar=0,scrollbars=1');
			}
			function OpenViewCommission(pStyle,pCustomerID,pCustomerName,pApp){		
					window.open(ServerName + App +  '/AccAcq/Credit/CreditProcess/NewApplication/ViewCommision.aspx?CustID=' + pCustomerID + '&CustName=' + pCustomerName + '&ApplicationID=' + pApp + '&style=' + pStyle, 'AccPay', 'left=0, top=0, width=800, height=600, menubar=0,scrollbars=1');
			}			
			function OpenViewCollection(pStyle,pApplicationID,pBranchID,pCustomerID,pCustomerName,pAgreementNo)
			{
					window.open(ServerName + App + '/Collection/Inquiry/ViewCollection.aspx?Style=' + pStyle + '&ApplicationID=' + pApplicationID + '&BranchID=' + pBranchID +'&CustomerID=' + pCustomerID + '&CustomerName=' + pCustomerName + '&AgreementNo=' + pAgreementNo, null,'left=50, top=50, width=900, height=600, menubar=0,scrollbars=1');
			}
			function OpenInsurance(pStyle,pApplicationID,pBranchID,pCustomerID,pCustomerName,pAgreementNo)
			{
					window.open(ServerName + App + '/Insurance/ViewInsuranceDetail.aspx?Style=' + pStyle + '&ApplicationID=' + pApplicationID + '&BranchID=' + pBranchID + '&CustomerID=' + pCustomerID + '&CustomerName=' + pCustomerName + '&AgreementNo=' + pAgreementNo + '&PageSource=ViewCollection', null,'left=50, top=50, width=900, height=600, menubar=0,scrollbars=1');
			}			 
			
			function OpenActivity(pApplicationID,pAgreementNo,pCustomerID,pCustomerName,pStyle,pReferrer){
					window.open(ServerName + App + '/Collection/Inquiry/InqCollActivityResult.aspx?ApplicationID=' + pApplicationID + '&AgreementNo=' + pAgreementNo + '&CustomerID=' + pCustomerID + '&CustomerName=' + pCustomerName + '&Style=' + pStyle + '&referrer=' + pReferrer , 'CollectionActivity', 'left=0, top=0, width=700, height=600, menubar=0, scrollbars=yes');
			}			
			
			function OpenRalHist(pStyle,pApplicationID,pBranchID,pAgreementNo,pCustomerID,pCustomerName)
			{
					window.open(ServerName + App + '/Collection/Inquiry/RALHistory.aspx?Style=' + pStyle + '&AppliactionID=' + pApplicationID + '&BranchID=' + pBranchID + '&AgreementNo=' + pAgreementNo + '&CustomerID=' + pCustomerID + '&CustomerName=' + pCustomerName, 'RALHISTORY','left=50, top=50, width=900, height=600, menubar=0,scrollbars=1');
			}
			function OpenReceiptNotesView(pStyle,pApplicationID,pBranchID)
			{
					window.open(ServerName + App + '/Collection/Inquiry/ReceiptNotesView.aspx?Style=' + pStyle + '&ApplicationID=' + pApplicationID + '&BranchID=' + pBranchID, 'RECEIPTNOTES','left=50, top=50, width=900, height=600, menubar=0,scrollbars=1');
			}
			function OpenCollection(pApplicationID, pCustomerID){
				window.open(ServerName + App + '/Collection/Inquiry/InqCollActivityHistory.aspx?ApplicationID=' + pApplicationID + '&CustomerID=' + pCustomerID, 'CollectionView', 'left=50, top=10, width=600, height=480, menubar=0, scrollbars=yes');
			}

			function OpenWinSupplier(pStyle, pSupplierID){
				window.open(ServerName + App + '/Marketing/ViewSupplier.aspx?style=' + pStyle + '&SupplierID=' + pSupplierID, 'Supplier', 'left=0, top=0, width=800, height=600, menubar=0, scrollbars=1')
			}
			function OpenWinSupplierEmployee(pStyle,pSupplierEmployeeID,pSupplierID){
				window.open(ServerName + App + '/Marketing/ViewSupplierEmployee.aspx?style=' + pStyle + '&SupplierID=' + pSupplierID + '&SupplierEmployeeId=' + pSupplierEmployeeID, 'SupplierEmployee', 'left=0, top=0, width=800, height=600, menubar=0, scrollbars=1')
			}
			function OpenViewSupplier(pStyle, pSupplierID){
				window.open(ServerName + App + '/Marketing/ViewSupplier.aspx?style=' + pStyle + '&SupplierID=' + pSupplierID, 'Supplier', 'left=0, top=0, width=800, height=600, menubar=0, scrollbars=1')
			}
			function OpenViewInsCoBranch(pBranchID,pInsCoBranchID,pStyle){ 
					window.open(ServerName + App + '/Insurance/Setting/InsCoView.aspx?BranchID=' + pBranchID + '&InsCoBranchID=' + pInsCoBranchID + '&Style=' + pStyle, 'InsuranceCo', 'left=15, top=10, width=985, height=350, menubar=0, scrollbars=1')
			}
			function OpenViewLifeInsCoBranch(pBranchID,pInsCoBranchID,pStyle){ 
					window.open(ServerName + App + '/Insurance/LifeInsurance/Setting/LifeInsCoView.aspx?BranchID=' + pBranchID + '&InsCoBranchID=' + pInsCoBranchID + '&Style=' + pStyle, 'InsuranceCo', 'left=15, top=10, width=985, height=350, menubar=0, scrollbars=1')
			}
			function OpenWinProductOffering(pProductID,pBranchID,pProductOfferingID,pStyle, pIsProductByTenor){
				window.open(ServerName + App + '/Marketing/Setting/ProductMnt/ProductOfferingBranchView.aspx?ProductID=' + pProductID + '&BranchID=' + pBranchID + '&ProductOfferingID=' + pProductOfferingID + '&style=' + pStyle + '&IsProductByTenor=' + pIsProductByTenor, 'ProductOffering', 'left=0, top=0, width=800, height=600, menubar=0, scrollbars=yes');
			} 
			
			function OpenWinLookUpProductOffering(pMinTenor,pMaxTenor,pCurrency, pProductOfferingID,pProductOfferingDescription,hProductOfferingDescription,pProductID,pAssetType,pIsBindTenor,pStyle,pBranchID, pIsProductByTenor, pCustomerID){
					window.open(ServerName + App + '/General/LookUpProductOffering.aspx?mintenor=' + pMinTenor + '&maxtenor=' + pMaxTenor + '&currency='+ pCurrency + '&IsBindTenor='+ pIsBindTenor + '&style=' + pStyle + '&productofferingid=' + pProductOfferingID + '&description=' + pProductOfferingDescription + '&hdescription=' + hProductOfferingDescription + '&productid=' + pProductID + '&assettype='+ pAssetType + '&branchid=' + pBranchID + '&IsProductByTenor=' + pIsProductByTenor  + '&CustomerID=' + pCustomerID , null, 'left=50, top=10, width=800, height=600, menubar=0, scrollbars=yes');
			}
						
			function OpenAO(pStyle,pBranchID,pEmployeeID){
				window.open(ServerName + App + '/Setting/Organization/EmployeeView.aspx?Style=' + pStyle + '&BranchID=' + pBranchID + '&EmployeeID='+ pEmployeeID ,'AO','left=0, top=0, width=800, height=600, menubar=0, scrollbars=1');			
			}
			function OpenWinProductView(pStyle, pProductID){
				window.open(ServerName + App + '/Marketing/Setting/ProductMnt/ProductView.aspx?style=' + pStyle + '&ProductID='+ pProductID,'Product','left=0, top=0, width=800, height=600, menubar=0, scrollbars=1');
			}		
			function OpenWinPaymentVoucher(pPaymentVoucherNo, pBranchID, pAPType, pStyle){
				window.open(ServerName + App + '/Finance/AccountPayable/ViewPaymentVoucher.aspx?PaymentVoucherNo='+ pPaymentVoucherNo + '&BranchID=' + pBranchID + '&APType=' + pAPType + '&style='+ pStyle  ,'PaymentVoucher','left=50, top=10, width=900, height=650, menubar=0, scrollbars=1');
			}
			
			function OpenWinPaymentVoucherRptViewer(pPaymentVoucherNo, pBranchID, pAPType, pStyle){
				window.open(ServerName + App + '/Finance/Report/RptViewPaymentVoucherViewer.aspx?PaymentVoucherNo='+ pPaymentVoucherNo + '&BranchID=' + pBranchID + '&APType=' + pAPType + '&style='+ pStyle  ,'PaymentVoucher','left=50, top=10, width=900, height=650, menubar=0, scrollbars=1');
			}
			
			function OpenWinPaymentHistoryDetail(pStyle, pApplicationID, pBranchID, pHistorySequenceNo){
				window.open(ServerName + App + '/AccMnt/View/PaymentHistoryDetail.aspx?branchid=' + pBranchID + '&applicationid=' + pApplicationID + '&historysequenceno=' + pHistorySequenceNo + '&style='+ pStyle ,'PHH1','left=50, top=10, width=900, height=650, menubar=0, scrollbars=1');
			}
			function OpenWinWaiveInquiry(pStyle, pApprovalNo){
				window.open(ServerName + App + '/AccMnt/View/LCWaivedView.aspx?Style=' + pStyle + '&ApprovalNo=' + pApprovalNo,'WaiveView','left=50, top=10, width=900, height=650, menubar=0, scrollbars=1');
			}
			
			function OpenAgreementTransfer(pStyle,pBranchID,pApplicationID,pSeqNo,pApprovalNo){
				window.open(ServerName + App + '/AccMnt/AgreementTransfer/ATInqView.aspx?Style=' + pStyle + '&BranchID=' + pBranchID + '&ApplicationID='+ pApplicationID + '&SeqNo='+ pSeqNo + '&ApprovalNo='+ pApprovalNo,'AT','left=50, top=10, width=900, height=500, menubar=0, scrollbars=1');			
			}
			
			function OpenDueDateChange(pStyle,pApprovalNo){
				window.open(ServerName + App + '/AccMnt/DueDateChange/DInqView.aspx?Style=' + pStyle + '&ApprovalNo=' + pApprovalNo,'DueDate','left=50, top=10, width=900, height=500, menubar=0, scrollbars=1');			
			}					

			
			function OpenViewDocument(pApplicationID,pBranchID,pAssetSeqNo,pStyle){
					window.open(ServerName + App + '/AssetDocument/Inquiry/ViewDoc.aspx?ApplicationID=' + pApplicationID + '&Branchid=' + pBranchID + '&AssetSeqNo=' + pAssetSeqNo + '&Style=' + pStyle, 'DocStatus', 'left=15, top=10, width=985, height=600, menubar=0, scrollbars=1')
			}
			
			function OpenViewDetailRefund(pApplicationID,pBranchID){
					window.open(ServerName + App + '/AccMnt/Refund/Advance/ViewDetailRefund.aspx?ApplicationID=' + pApplicationID + '&Branchid=' + pBranchID, 'DetailRefund', 'left=15, top=10, width=985, height=600, menubar=0, scrollbars=1')
			}
			
			function OpenBatchNo(pStyle,pBatchNo, pBranchID){
				window.open(ServerName + App + '/AccMnt/ReceiveEditList/BatchNoView.aspx?BatchNo=' + pBatchNo + '&Branchid=' + pBranchID + '&Style=' + pStyle, 'DocStatus', 'left=15, top=10, width=985, height=350, menubar=1, scrollbars=1')
			}
			function OpenWinFullPrepayment(pStyle,pApprovalNo)
			{				
				window.open(ServerName + App +  '/AccMnt/FullPrepay/ViewRequestNo.aspx?style=' + pStyle + '&ApprovalNo=' + pApprovalNo, 'FullPrepayView', 'left=0, top=0, width=900, height=900, menubar=0,scrollbars=1')
			}
			function OpenWinViewAssetRequestNo(pStyle,pRequestNo)
				{				
					window.open(ServerName + App +  '/AccMnt/AssetRelease/ViewRequestNo.aspx?style=' + pStyle + '&requestno=' + pRequestNo, 'RequestNoLookup', 'left=0, top=0, width=900, height=650, menubar=0,scrollbars=1')
				}
			function OpenWinViewAssetReleaseRequestNo(pStyle,pApprovalNo)
			{				
				window.open(ServerName + App +  '/AccMnt/AssetRelease/AssetReleaseView.aspx?style=' + pStyle + '&ApprovalNo=' + pApprovalNo, 'RequestNoLookup', 'left=0, top=0, width=700, height=600, menubar=0,scrollbars=1')
			}	
			function OpenWinViewAssetReplacementRequestNo(pStyle,pApprovalNo)
			{				
				window.open(ServerName + App +  '/AccMnt/AssetReplacement/ViewAssetReplacement.aspx?style=' + pStyle + '&ApprovalNo=' + pApprovalNo, 'RequestNoLookup', 'left=0, top=0, width=700, height=600, menubar=0,scrollbars=1')

			}
			
			function OpenWinViewAsset(pApplicationid,pCustomername,pStyle,pCustomerid,pAgreementNo,pAssetseqno)
			{
				
				window.open(ServerName  + App + '/AccAcq/Credit/ViewAsset.aspx?ApplicationID=' + pApplicationid  +'&CustomerName=' + pCustomername +'&CustomerID=' + pCustomerid + '&AgreementNo=' + pAgreementNo +'&AssetSeqNO=' + pAssetseqno + '&style=' + pStyle, 'Asset', 'left=0, top=0, width=900, height=700, menubar=0, scrollbars=yes');
			}		

			function OpenWinViewAssetReplacementDetail(pStyle,pRequestNo,pAppID,pBranchID,pAssetRepSeqNo,pAssetSeqNo)
			{				
				window.open(ServerName + App +  '/AccMnt/AssetReplacement/ViewAssetReplacementDetail.aspx?style=' + pStyle + '&requestno=' + pRequestNo + '&applicationid=' + pAppID + '&BranchID=' + pBranchID + '&AssetRepSeqNo=' + pAssetRepSeqNo + '&AssetSeqNo=' + pAssetSeqNo, 'AssetReplacementViewDetail', 'left=0, top=0, width=700, height=600, menubar=0,scrollbars=1')
			}					
			
			function OpenWinViewRescheduling(pStyle,pApprovalNo)
			{				
				window.open(ServerName + App +  '/AccMnt/Rescheduling/Inquiry/ViewRescheduling.aspx?style=' + pStyle + '&ApprovalNo=' + pApprovalNo, 'ReschedulingLookUp', 'left=0, top=0, width=700, height=600, menubar=0,scrollbars=1')
			}		
			
			function OpenWinViewRestructuring(pStyle,pApprovalNo)
			{				
				window.open(ServerName + App +  '/AccMnt/Restructure/Inquiry/ViewRestructure.aspx?style=' + pStyle + '&ApprovalNo=' + pApprovalNo, 'ResctructuringLookUp', 'left=0, top=0, width=700, height=600, menubar=0,scrollbars=1')
			}
			
			function OpenWinViewRestructure(pStyle,pApprovalNo)
			{				
				window.open(ServerName + App +  '/AccMnt/Restructure/Inquiry/ViewRestructure.aspx?style=' + pStyle + '&ApprovalNo=' + pApprovalNo, 'RestructureLookUp', 'left=0, top=0, width=700, height=600, menubar=0,scrollbars=1')
			}					
			function OpenWinViewPartialRequestNo(pStyle,pApprovalNo,pBranchID)
			{				
				window.open(ServerName + App +  '/AccMnt/PartialAssetPrepay/PartAssetPrepayView.aspx?style=' + pStyle + '&ApprovalNo=' + pApprovalNo +'&BranchID=' + pBranchID, 'RequestNoLookup', 'left=0, top=0, width=700, height=600, menubar=0,scrollbars=1')
			}
				function OpenWinViewRefundRequestNo(pStyle,pApprovalNo)
			{				
				window.open(ServerName + App +  '/AccMnt/Refund/RefundView.aspx?style=' + pStyle + '&ApprovalNo=' + pApprovalNo, 'RefundLookup', 'left=0, top=0, width=700, height=600, menubar=0,scrollbars=1')
			}
			function OpenWinViewRequestNaNo(pStyle,pApprovalNo)
			{				
				window.open(ServerName + App +  '/AccMnt/StopAccrued/StopAccruedView.aspx?style=' + pStyle + '&ApprovalNo=' + pApprovalNo, 'RequestNoLookup', 'left=0, top=0, width=900, height=500, menubar=0,scrollbars=1')
			}
			function OpenWinViewRequestDFNo(pStyle,pApprovalNo)
			{				
				window.open(ServerName + App +  '/AccMnt/DebtForgiveness/DFView.aspx?style=' + pStyle + '&ApprovalNo=' + pApprovalNo, 'REQUESTDFLookup', 'left=0, top=0, width=900, height=500, menubar=0,scrollbars=1')
			}
			function OpenWinViewRequestWONo(pStyle,pApprovalNo)
			{				
				window.open(ServerName + App +  '/AccMnt/WriteOff/WriteOffView.aspx?style=' + pStyle + '&ApprovalNo=' + pApprovalNo, 'RequestWOLookup', 'left=0, top=0, width=900, height=500, menubar=0,scrollbars=1')
			}
			function OpenWinViewAdvInsClaim(pStyle,pApplication,pApprovalNo)
			{				
				window.open(ServerName + App +  '/Insurance/Claim/AdvanceClaim/InsAdvClaimReqView.aspx?style=' + pStyle + '&ApplicationID=' + pApplication + '&ApprovalNo=' + pApprovalNo, null, 'left=0, top=0, width=900, height=650, menubar=0,scrollbars=1')
			}
			function OpenWinViewOrderOfTransfer(pTransferNo,pBranchID)
			{				
				window.open(ServerName + App +  '/Finance/AccountPayable/ViewOrderOfTransfer.aspx?TransferNo=' + pTransferNo + '&BranchID=' + pBranchID, 'AccPay', 'left=0, top=0, width=900, height=400, menubar=0,scrollbars=1')
			}
			function OpenWinMain(SuspendNo,branchid,currencyid){	
					window.open(ServerName + App +  '/AccMnt/Suspend/SuspendInqView.aspx?SuspendNo=' + SuspendNo + '&branchid=' + branchid + '&currencyid=' + currencyid, null, 'left=50, top=10, width=700, height=300, menubar=0,scrollbars=1')
			}
			
			function OpenVendor(pStyle,pVendorID){	
					window.open(ServerName + App +  '/AssetBuy/ViewVendor.aspx?Style=' + pStyle + '&VendorID=' + pVendorID, 'Vendor', 'left=0, top=0, width=800, height=600, menubar=0,scrollbars=yes')
			}		

			function OpenBatch(pStyle,pBatchNo,pMutualAgreementNo,pVendorID,pBranchID){	
					window.open(ServerName + App +  '/AssetBuy/CreditProcess/ViewBatch.aspx?Style=' + pStyle + '&BatchNo=' + pBatchNo + '&MutualAgreementNo=' + pMutualAgreementNo + '&VendorID=' + pVendorID + '&BranchID=' + pBranchID , 'Batch', 'left=0, top=0, width=800, height=600, menubar=0,scrollbars=yes')
			}				
			
			function OpenMutualAgreement(pStyle,pMutualAgreementNo,pVendorID,pBranchID){	
					window.open(ServerName + App +  '/AssetBuy/CreditProcess/ViewMutualAgreement.aspx?Style=' + pStyle + '&MutualAgreementNo=' + pMutualAgreementNo + '&VendorID=' + pVendorID + '&BranchID=' + pBranchID , 'MutualAgreement', 'left=0, top=0, width=800, height=600, menubar=0,scrollbars=yes')
			}			
			
			function OpenBatchAgreement(pStyle,pAgreementNo,pBatchNo,pMutualAgreementNo,pVendorID,pBranchID){	
					window.open(ServerName + App +  '/AssetBuy/CreditProcess/ViewAgreement.aspx?Style=' + pStyle + '&AgreementNo=' + pAgreementNo + '&BatchNo=' + pBatchNo + '&MutualAgreementNo=' + pMutualAgreementNo + '&VendorID=' + pVendorID + '&BranchID=' + pBranchID , 'Batch', 'left=0, top=0, width=800, height=600, menubar=0,scrollbars=yes')
			}					
			function OpenWinNegativeCust(pID){
				window.open(ServerName + App +  '/Marketing/NegativeCustomerView.aspx?NegativeCustomerID=' + pID  + '', 'UserLookup', 'left=0, top=0, width=800, height=600, menubar=0, scrollbars=yes');
			}
			
			function OpenWinHistory(pCGID,pExID,pExName){
			window.open('../ExecutorHistory.aspx?CGID=' + pCGID  + '&ExecutorID=' + pExID  + '&ExecutorName=' + pExName  + '', 'UserLookup', 'left=50, top=10, width=600, height=480, menubar=0, scrollbars=yes');
			}
			
			function OpenWinCollector(pCollID,pCGID){
			window.open(ServerName + App + '/Collection/Setting/CollectorView.aspx?CGID=' + pCGID  + '&CollectorID=' + pCollID  + '', 'UserLookup', 'left=50, top=10, width=650, height=480, menubar=0, scrollbars=yes');
			}

			function OpenViewInsCoBranch(pBranchid,pInsCoBranchID,pStyle){
				window.open(ServerName + App +  '/Insurance/Setting/InsCoView.aspx?Branchid=' + pBranchid + '&style=' + pStyle + '&InsCoBranchID=' + pInsCoBranchID, 'InsuranceCo', 'left=15, top=10, width=985, height=350, menubar=0, scrollbars=yes');
			}
			
			function OpenWinProductBranchHOView(pProductID,pBranchID){
				window.open(ServerName + App + '/Marketing/Setting/ProductMnt/ProductBranchHOView.aspx?ProductID='+ pProductID + '&BranchID=' + pBranchID ,'Product','left=0, top=0, width=800, height=600, menubar=0, scrollbars=1');			
			}			
			function OpenWindowCompany(pCompanyID){
				window.open(ServerName + App + '/Setting/Organization/CompanyView.aspx?CompanyID=' + pCompanyID , 'CompanyView', 'left=0, top=0, width=800, height=600, menubar=0, scrollbars=yes');
			}
			function OpenWinAssetRelease(pApplicationid,pName,pStyle,pAgreementNo,pCustomerID,pCurrencyid,pAssetSeqNo){
				window.open(ServerName + App + '/AccAcq/Credit/ViewAsset.aspx?ApplicationID='+ pApplicationid + '&CustomerName=' + pName + '&Style=' + pStyle + '&CustomerID=' + pCustomerID + '&AgreementNo=' + pAgreementNo + '&AssetSeqNO=' + pAssetSeqNo,'AssetRelease','left=0, top=0, width=800, height=600, menubar=0, scrollbars=1');	
			}		 
			
			//Mark
			
			function OpenETView(pStyle,pBranchID,pAppID){		
					//alert('dfs');
					window.open(ServerName + App +  '/Channeling/View/ViewEarlyTermination.aspx?Style=' + pStyle + '&BranchID=' + pBranchID + '&ApplicationID=' + pAppID,'Channeling','left=50, top=10, width=700, height=500, menubar=0, scrollbars=1');			
			}	
			
			function OpenFundingPaymentOutViewHistoryJFCHN(pStyle,pFundingCoyID,pFundingCompanyName,pFundingContractNo,pFundingContractName){		
					//alert('dfs');
					window.open(ServerName + App +  '/Channeling/View/ViewPaymentHistoryJFCHN.aspx?Style=' + pStyle + '&CompanyID=' + pFundingCoyID + '&CompanyName=' + pFundingCompanyName + '&FundingContractNo=' + pFundingContractNo + '&ContractName=' + pFundingContractName,'Channeling','left=50, top=10, width=700, height=500, menubar=0, scrollbars=1');			
			}	
			
			//Shandy
			function OpenFundingOtherTransactionViewJFCHN(pStyle, pTransactionNo) {
			  window.open(ServerName + App + '/Channeling/View/FundingOtherTransactionViewJFCHN.aspx?Style=' + pStyle + '&TransactionNo=' + pTransactionNo,'Channeling','left=50, top=10, width=700, height=500, menubar=0, scrollbars=1');
			}
			//----------
			
			function OpenFundingPaymentOutViewJFCHN(pStyle,pPayOutNo){		
					//alert('dfs');
					window.open(ServerName + App +  '/Channeling/View/FundingPaymentOutViewJFCHN.aspx?Style=' + pStyle + '&PayOutNo=' + pPayOutNo,'Channeling','left=50, top=10, width=700, height=500, menubar=0, scrollbars=1');			
			}	
			
			//-== Ivan W, 22 Nov'07 ==-
			function OpenFundingPaymentOutViewJFCHNNM(pStyle,pPayOutNo){		
					//alert('dfs');
					window.open(ServerName + App +  '/Channeling/View/FundingPaymentOutViewJFCHNNM.aspx?Style=' + pStyle + '&PayOutNo=' + pPayOutNo,'Channeling','left=50, top=10, width=700, height=500, menubar=0, scrollbars=1');			
			}	
			//-== End ==-
			
			function OpenFundingBatchViewJFCHN(pStyle,pCompanyID,pCompanyName,pBankName,pBankID,pContractName,pFundingContractNo,pFundingBatchNo){		
					//alert('dfs');
					window.open(ServerName + App +  '/Channeling/View/FundingBatchViewJFCHN.aspx?Style=' + pStyle + '&CompanyID=' + pCompanyID + '&CompanyName=' + pCompanyName + '&BankName='+ pBankName + '&BankID='+ pBankID + '&ContractName=' + pContractName + '&FundingContractNo='+ pFundingContractNo +'&FundingBatchNo='+ pFundingBatchNo,'Channeling','left=50, top=10, width=700, height=500, menubar=0, scrollbars=1');			
			}	
			
			function OpenFundingCompanyContractViewJFCHN(pStyle,pCompanyID,pBankName,pFundingContractNo){	
					//alert('dfs');
					window.open(ServerName + App + '/Channeling/View/FundingCompanyContractViewJFCHN.aspx?Style=' + pStyle + '&CompanyID=' + pCompanyID + '&BankName='+ pBankName + '&FundingContractNo='+ pFundingContractNo,'Channeling','left=50, top=10, width=700, height=500, menubar=0, scrollbars=1');			
			}
					
			function OpenFundingCompanyView(Style, CompanyID){
					//alert('dfs');
					window.open(ServerName + App + '/Channeling/View/FundingCompanyView.aspx?Style=' + Style + '&CompanyID=' + CompanyID, 'Channeling', 'left=50, top=50, width=700, height=500, menubar=0,scrollbars=1');
			}
			//End Mark
			
			function OpenFundingBatchViewTL(pStyle,pCompanyID,pCompanyName,pBankName,pBankID,pContractName,pFundingContractNo,pFundingBatchNo){		
				//alert('dfs');
				window.open(ServerName + App +  '/Channeling/View/FundingBatchViewTL.aspx?Style=' + pStyle + '&CompanyID=' + pCompanyID + '&CompanyName=' + pCompanyName + '&BankName='+ pBankName + '&BankID='+ pBankID + '&ContractName=' + pContractName + '&FundingContractNo='+ pFundingContractNo +'&FundingBatchNo='+ pFundingBatchNo,'Channeling','left=50, top=10, width=700, height=500, menubar=0, scrollbars=1');			
			}	
			function OpenFundingCompanyContractViewTL(pStyle,pCompanyName,pBankName,pFundingContractNo,pFundingCoyID){	
				window.open(ServerName + App +  '/Channeling/View/FundingCompanyContractViewTL.aspx?Style=' + pStyle + '&CompanyName=' + pCompanyName + '&BankName='+ pBankName + '&FundingContractNo='+ pFundingContractNo + '&CompanyID=' + pFundingCoyID ,'Channeling','left=50, top=10, width=700, height=500, menubar=0, scrollbars=1');			
			}	
			//Untuk Inquiry RequestNo - Anton ================================================================================================================================================================================================================================================================================================================================================================================
			function OpenWinViewARSettlementRequestNo(pStyle,pRequestNo,pApplicationID,pBranchID)
			{				
				window.open(ServerName + App +  '/AccMnt/InventorySelling/InventorySellingForLastPayment/ViewInvSellingForLastPaymentRequestNo.aspx?style=' + pStyle + '&requestno=' + pRequestNo + '&ApplicationID=' + pApplicationID + '&BranchID=' + pBranchID, 'RequestNoLookup', 'left=0, top=0, width=900, height=650, menubar=0,scrollbars=1')
			}			
			function OpenWinViewInvAppraisalEstimateRequestNo(pStyle,pRequestNo,pApplicationID,pBranchID,pAssetSeqNo,pRepossesSeqNo,pAppraisalSeqNo)
			{				
				window.open(ServerName + App +  '/Collection/CollectionMacet/ViewInventoryAppraisalEstimate.aspx?style=' + pStyle + '&requestno=' + pRequestNo + '&ApplicationID=' + pApplicationID + '&BranchID=' + pBranchID + '&AssetSeqNo=' + pAssetSeqNo + '&RepossesSeqNo=' + pRepossesSeqNo + '&AppraisalSeqNo=' + pAppraisalSeqNo, 'RequestNoLookup', 'left=0, top=0, width=900, height=650, menubar=0,scrollbars=1')
			}			
			function OpenWinViewInvAppraisalRequestNo(pStyle,pRequestNo,pApplicationID,pBranchID,pAssetSeqNo,pRepossesSeqNo,pSellingSeqNo)
			{				
				window.open(ServerName + App +  '/Collection/CollectionMacet/ViewInventoryAppraisal.aspx?style=' + pStyle + '&requestno=' + pRequestNo + '&ApplicationID=' + pApplicationID + '&BranchID=' + pBranchID + '&AssetSeqNo=' + pAssetSeqNo + '&RepossesSeqNo=' + pRepossesSeqNo + '&SellingSeqNo=' + pSellingSeqNo, 'RequestNoLookup', 'left=0, top=0, width=900, height=650, menubar=0,scrollbars=1')
			}	
			
			//remedial - anton 08-11-2006
			function OpenWinViewRemedialInvAppraisalEstimateRequestNo(pStyle,pRequestNo,pApplicationID,pBranchID,pAssetSeqNo,pRepossesSeqNo,pRalNo)
			{				
				window.open(ServerName + App +  '/Collection/CollectionMacet/Remedial/Inventory/RemedialViewInventoryAppraisalEstimate.aspx?style=' + pStyle + '&requestno=' + pRequestNo + '&ApplicationID=' + pApplicationID + '&BranchID=' + pBranchID + '&AssetSeqNo=' + pAssetSeqNo + '&RepossesSeqNo=' + pRepossesSeqNo + '&RalNo=' + pRalNo , 'RequestNoLookup', 'left=0, top=0, width=900, height=650, menubar=0,scrollbars=1')
			}				
			
			function OpenWinViewLeasedObjectRequestNo(pStyle,pApprovalNo)
			{				
				window.open(ServerName + App +  '/Collection/CollectionMacet/Remedial/Inventory/RemedialViewInventoryAppraisal.aspx?style=' + pStyle + '&ApprovalNo=' + pApprovalNo , 'RequestNoLookup', 'left=0, top=0, width=900, height=650, menubar=0,scrollbars=1')
			}				
			
			//================================================================================================================================================================================================================================================================================================================================================================================================================
			function OpenCommunicationLinked(pFlag,pAppID,pAgrNO){								
				window.open(ServerName + App + '/Setting/General/ReplyAgreementCommunication.aspx?AppID='+ pAppID +'&flag=' + pFlag + '&AgreementNo=' + pAgrNO,'CommunicationLinked','left=50, top=10, width=700, height=500, menubar=0, scrollbars=1');			
			}
			function OpenFundingCompanyContractViewBD(pStyle,pCompanyID,pCompanyName,pBankName,pFundingContractNo){	
				window.open(ServerName + App + '/Channeling/View/FundingCompanyContractViewBD.aspx?Style=' + pStyle + '&CompanyID=' + pCompanyID +'&CompanyName=' + pCompanyName + '&BankName='+ pBankName + '&FundingContractNo='+ pFundingContractNo,'Channeling','left=50, top=10, width=700, height=500, menubar=0, scrollbars=1');			
			}
			function OpenFundingBatchViewBD(pStyle,pCompanyID,pCompanyName,pBankName,pBankID,pContractName,pFundingContractNo,pFundingBatchNo){		
				window.open(ServerName + App + '/Channeling/View/FundingBatchViewBD.aspx?Style=' + pStyle + '&CompanyID=' + pCompanyID + '&CompanyName=' + pCompanyName + '&BankName='+ pBankName + '&BankID='+ pBankID + '&ContractName=' + pContractName + '&FundingContractNo='+ pFundingContractNo +'&FundingBatchNo='+ pFundingBatchNo,'Channeling','left=50, top=10, width=700, height=500, menubar=0, scrollbars=1');			
			}	
			//=====================Dedy Remedial============================
			function OpenApprovalHistory(pApprovalNo,pApprovalSchemeID,pStyle){
				//alert();								
				window.open(ServerName + App + '/Collection/CollectionMacet/Remedial/Budget/BudgetApprovalHistory.aspx?ApprovalNo=' + pApprovalNo + '&ApprovalSchemeID=' + pApprovalSchemeID + '&Style=' + pStyle ,'ApprovalHistory','left=50, top=10, width=700, height=500, menubar=0, scrollbars=1')			
			}
			function OpenBudgetViewer(pStyle,pApprovalNo){
				//alert();								
				window.open(ServerName + App + '/Collection/CollectionMacet/Remedial/Budget/BudgetProffCollViewer.aspx?Style=' + pStyle + '&ApprovalNo=' + pApprovalNo,'BudgetProffColl','left=50, top=10, width=700, height=500, menubar=0, scrollbars=1')			
			}
			//==============================================================
				 
			//==============================================================
			
			function OpenPDCPrintReceipt(PDCReceiptNo){
					window.open(ServerName + App +  '/AccMnt/PDC/PrintTandaTerimaGiro.aspx?PDCReceiptNo=' + PDCReceiptNo, 'PDCReceipt', 'left=50, top=10, width=900, height=700, menubar=0,scrollbars=1')
			}	
			function openLinkSrvANJ (pURL){
					window.open(pURL ,null,'left=50,top=10,width=900,height=700,menubar=0,scrollbars=1,resizable=yes');
			}
			function OpenWinLookUpProduct(pMinTenor,pMaxTenor,pCurrency,pProductDescription,pProductID,pAssetType,pStyle,pBranchID){
				window.open(ServerName + App + '/General/LookUpProduct.aspx?mintenor=' + pMinTenor + '&maxtenor=' + pMaxTenor + '&currency=' + pCurrency + '&productdescription=' + pProductDescription + '&productid=' + pProductID + '&AssetType=' + pAssetType +  '&style=' + pStyle + '&Branch=' + pBranch , 'ProductOffering', 'left=0, top=0, width=800, height=600, menubar=0, scrollbars=yes');
			} 
			
			function OpenMasterCOA(pHdnCOAID,pHdnCOAName,pTxtCOAID,pStyle){
						window.open(ServerName + App + 'AccMnt/Setting/ViewMasterCOA.aspx?hdnCOAIDClientID='+ pHdnCOAID +'&hdnCOANameClientID=' + pHdnCOAName + '&txtCOAIDClientID=' + pTxtCOAID + '&Style=' + pStyle,'AccAcq','left=50, top=10, width=700, height=500, menubar=0, scrollbars=1');
			}
			
			function isValidFormat(pFormat,pObjCheck)
			{
			
				var loop, objLength, pAscii, pOAscii;
				var isNum, isUChar, isLChar;
				var isONum, isOuChar, isOlChar;
				var isSChar, isOsChar;
				
										
				objLength = pFormat.length;
				
				
				var startUCharAsc = 65;
				var endUCharAsc = 90;
				
				var startNumAsc = 48;
				var endNumAsc = 57;
				
				var startLCharAsc = 97;
				var endLCharAsc = 122;
				
				if (pObjCheck.length !=pFormat.length)
				{
					window.alert("length of data must " + pFormat.length + " Character");
					return false;
				}
				
						
				for (loop=0;loop<=objLength-1;loop++)
				{
					isUChar  = 0;
					isOuChar = 0;
					isLChar  = 0;
					isOlChar = 0;
					isNum	 = 0;
					isONum   = 0;
					isSChar  = 0;
					isOsChar = 0;
					//get ascii value on parameter format;
					pAscii = pFormat.charCodeAt(loop);
					if (pAscii>=startUCharAsc && pAscii<=endUCharAsc)
					{
						isUChar=1;
					}else if (pAscii>=startLCharAsc && pAscii<=endLCharAsc)
					{
						isLChar=1;
					}else if (pAscii>=startNumAsc && pAscii<=endNumAsc)
					{
						isNum=1;
					}else{
						isSChar=1;
					}
					
					//get ascii value on object String;
					pOAscii = pObjCheck.charCodeAt(loop);

					 
					//alert(pAscii+'-'+pOAscii);
					if (pOAscii>=startUCharAsc && pOAscii<=endUCharAsc)
					{
						isOuChar=1;
					}else if (pOAscii>=startLCharAsc && pOAscii<=endLCharAsc)
					{
						isOlChar=1;
					}else if (pOAscii>=startNumAsc && pOAscii<=endNumAsc)
					{
						isONum=1;
					}else{
						isOsChar=1;
					}
					
					//alert(isUChar + "-"+ isOuChar + "-" +isLChar+"-"+isOlChar+"-" +isNum+"-"+isONum+"-"+isSChar+"-"+isOsChar);
					
					if (isSChar!=isOsChar)
					{
						alert("Format Data is not valid (ex: " + pFormat + "), char position " + parseInt(loop+1) + " must '" + pFormat.charAt(loop) + "' !");
						return false;
						
					}else if (isSChar=isOsChar){
						if (pAscii!=pOAscii)
						{
							alert("Format Data is not valid (ex: " + pFormat + "), char position " + parseInt(loop+1) + " must '" + pFormat.charAt(loop) + "' !");
							return false;
						}
					}
					
					if ((isUChar!=isOuChar)||(isLChar!=isOlChar)||(isNum!=isONum))
					{
							alert("Format Data is not valid (ex:" + pFormat + "), please check again!");
							return false;	
					}
				}

				//alert("Format Data is Valid!")
				return true;		
			}
			
			//------------ EXPENSE CONTROL -------------------------
			function ExpOpenWinSupplier(pStyle, pSupplierID){
				window.open(ServerName + App + '/Marketing/ViewSupplier.aspx?style=' + pStyle + '&SupplierID=' + pSupplierID, 'Supplier', 'left=0, top=0, width=800, height=600, menubar=0, scrollbars=1');
			}
			
			function ExpOpenViewApSupplier(pStyle, pAccountPayableNo, pBranchid,pApplicationid){			
					window.open(ServerName + App +  '/Finance/AccountPayable/ViewAPSupplier.aspx?Style=' + pStyle + '&AccountPayableNo=' + pAccountPayableNo + '&Applicationid=' +pApplicationid +'&Branchid=' + pBranchid, 'AccPay', 'left=50, top=50, width=900, height=600, menubar=0,scrollbars=1');
			}
			
			function ExpOpenViewInsCoBranch(pBranchID,pInsCoBranchID,pStyle){ 
					window.open(ServerName + App + '/Insurance/Setting/InsCoView.aspx?BranchID=' + pBranchID + '&InsCoBranchID=' + pInsCoBranchID + '&Style=' + pStyle, 'InsuranceCo', 'left=15, top=10, width=985, height=350, menubar=0, scrollbars=1');
			}
			
			function ExpOpenViewLifeInsCoBranch(pBranchID,pInsCoBranchID,pStyle){ 
					window.open(ServerName + App + '/Insurance/LifeInsurance/Setting/LifeInsCoView.aspx?BranchID=' + pBranchID + '&InsCoBranchID=' + pInsCoBranchID + '&Style=' + pStyle, 'InsuranceCo', 'left=15, top=10, width=985, height=350, menubar=0, scrollbars=1');
			}
			
			function ExpOpenCustomer(Style, CustomerId){		
					window.open(ServerName + App +  '/AccAcq/Credit/ViewPersonalCustomer.aspx?Style=' + Style + '&CustomerId=' + CustomerId, 'Personal', 'left=0, top=0, width=800, height=600, menubar=0,scrollbars=1')
			}
			
			function ExpOpenWinPaymentVoucher(pPaymentVoucherNo, pBranchID, pAPType, pStyle){
				window.open(ServerName + App + '/Finance/AccountPayable/ViewPaymentVoucher.aspx?PaymentVoucherNo='+ pPaymentVoucherNo + '&BranchID=' + pBranchID + '&APType=' + pAPType + '&style='+ pStyle  ,'PaymentVoucher','left=50, top=10, width=900, height=650, menubar=0, scrollbars=1');
			}
			
			function ExpOpenViewApInsurance(pStyle, pApplicationID, pBranchid,pAPNo){			
				window.open(ServerName + App +  '/Insurance/ViewAPInsurance.aspx?Style=' + pStyle + '&ApplicationID=' + pApplicationID + '&AccountPayableNo=' + pAPNo +'&Branchid=' + pBranchid, 'Insur', 'left=50, top=50, width=900, height=600, menubar=0,scrollbars=1')
			}
			
			function ExpOpenWinViewRefundRequestNo(pStyle,pApprovalNo)
			{				
				window.open(ServerName + App +  '/AccMnt/Refund/RefundView.aspx?style=' + pStyle + '&ApprovalNo=' + pApprovalNo, 'RefundLookup', 'left=0, top=0, width=700, height=600, menubar=0,scrollbars=1')
			}
			
			function ExpOpenViewCommission(pStyle,pCustomerID,pCustomerName,pApp){		
					window.open(ServerName + App +  '/AccAcq/Credit/CreditProcess/NewApplication/ViewCommision.aspx?CustID=' + pCustomerID + '&CustName=' + pCustomerName + '&ApplicationID=' + pApp + '&style=' + pStyle, 'AccPay', 'left=0, top=0, width=800, height=600, menubar=0,scrollbars=1')
			}	
			
			function ExpOpenViewBudgetAccount(pStyle, pAccountID){
				window.open(ServerName + App + '/ExpenseControl/BudgetMaintenance/AccountBudgetView.aspx?style=' + pStyle + '&AccountID=' + pAccountID, 'Budget', 'left=50, top=50, width=800, height=600, menubar=0, scrollbars=1')
			}
			
			function ExpOpenViewPaymentAllocation(pStyle, pPaymentAllocationID){
				window.open(ServerName + App + '/ExpenseControl/BudgetMaintenance/PaymentAllocationView.aspx?style=' + pStyle + '&PA=' + pPaymentAllocationID, 'PaymentAllocationView', 'left=100, top=100, width=600, height=400, menubar=0, scrollbars=1')
			}
			
			function ExpOpenViewApLifeInsurance(pStyle, pApplicationID, pBranchid,pAPNo){			
					window.open(ServerName + App +  '/Insurance/ViewAPLifeInsurance.aspx?Style=' + pStyle + '&ApplicationID=' + pApplicationID + '&AccountPayableNo=' + pAPNo +'&Branchid=' + pBranchid, 'Insur', 'left=50, top=50, width=900, height=600, menubar=0,scrollbars=1')
			}
			
			function ExpOpenViewRequestNoRefund(pBranchID,pRequestNo,pStyle){
					window.open(ServerName + App + '/AccMnt/Refund/Advance/ViewRefundAdvance.aspx?BranchID=' + pBranchID + '&RequestNo=' + pRequestNo + '&style=' + pStyle, 'ViewRequestNo', 'left=0, top=0, width=900, height=700, menubar=0, scrollbars=yes');
			}
			
			function ExpOpenWinSupplierEmployee(pStyle,pSupplierEmployeeID,pSupplierID){
				window.open(ServerName + App + '/Marketing/ViewSupplierEmployee.aspx?style=' + pStyle + '&SupplierID=' + pSupplierID + '&SupplierEmployeeId=' + pSupplierEmployeeID, 'SupplierEmployee', 'left=0, top=0, width=800, height=600, menubar=0, scrollbars=1')
			}
			
			//function ExpOpenAgreementReferenceProduct(pStyle,pProductID,pProductDescription){
			//alert(ServerName + App);
				//window.open(ServerName + App + '/General/LookUpAgreementReferenceProduct.aspx?style=' + pStyle + '&ProductID=' + pProductID + '&Description=' + pProductDescription, 'AgreementReferenceProduct', 'left=0, top=0, width=800, height=600, menubar=0, scrollbars=1')
			//}
					
			
			function ExpOpenWinViewPCReimburse(pRequestNo,pBranch,pStyle)
			{				
				window.open(ServerName + App +  '/AccMnt/Cashier/PettyCash/PettyCashReimburse/ViewPettyCashReimburse.aspx?Style=' + pStyle + '&RequestNo=' + pRequestNo + '&BranchId=' + pBranch, 'userlookup', 'left=50, top=50, width=700, height=500, menubar=0,scrollbars=1')
			}
				
			function ExpOpenWinViewPCTransaction(pPettyCashNo,pBranchId){	
				window.open(ServerName + App +  '/AccMnt/Cashier/PettyCash/PettyCashTransaction/PettyCashInquiryView.aspx?BranchId=' + pBranchId + '&PettyCashNo=' + pPettyCashNo +  '&style=AccMnt', null, 'left=50, top=50, width=800, height=500, menubar=0,scrollbars=1')
									
			}
			
			function OpenWinProductOfferingBranchViewNew(pProductOfferingID,pProductID,pBranchID,pStyle){
		        window.open( ServerName + App + '/Marketing/Setting/ProductMnt/ProductOfferingBranchViewNew.aspx?style=' + pStyle + '&ProductOfferingID=' + pProductOfferingID + '&ProductID='+ pProductID + '&BranchID=' + pBranchID ,'Product','left=0, top=0, width=700, height=500, menubar=0, scrollbars=1');			
       	    }
			function ExpOpenWinCustomer(pID,pStyle){	
					//window.open(ServerName + App + '/AccAcq/Credit/ViewPersonalCustomer.aspx?CustomerID=' + pID  + '&style=' + pStyle, 'Customer', 'left=0, top=0, width=800, height=600, menubar=0, scrollbars=yes');				
					window.open(ServerName + App + '/General/LookUpCustomer.aspx?CustomerID=' + pID  + '&style=' + pStyle, 'Customer', 'left=0, top=0, width=800, height=600, menubar=0, scrollbars=yes');
			}
			
			function ExpOpenViewCashAdvanceReturn(pBranchID,pReturnNo,pStyle,pApprovalNo){
					window.open(ServerName + App + '/ExpenseControl/CashAdvanceReturn/ExpenseControlAdvanceReturnViewDetail.aspx?BranchID=' + pBranchID + '&ReturnNo=' + pReturnNo + '&style=' + pStyle + '&ApprovalNo=' + pApprovalNo, 'CashAdvanceReturn', 'left=0, top=0, width=900, height=700, menubar=0, scrollbars=yes');
			}
			function ExpOpenViewCashAdvanceReturnApprovalHistory(pBranchID,pReturnNo,pStyle){
					window.open(ServerName + App + '/ExpenseControl/CashAdvanceReturn/ExpenseControlAdvanceReturnApprovalHistory.aspx?BranchID=' + pBranchID + '&ReturnNo=' + pReturnNo + '&style=' + pStyle, 'ViewCashAdvanceReturnApprovalHistory', 'left=0, top=0, width=900, height=700, menubar=0, scrollbars=yes');
			}
			
			function ExpOpenAgreementNo(Style, ApplicationId){		
					window.open(ServerName + App +  '/AccAcq/Credit/ViewStatementOfAccount.aspx?Style=' + Style + '&ApplicationId=' + ApplicationId, 'Agreement', 'left=0, top=0, width=800, height=600, menubar=0,scrollbars=1');
			}	
			
			function ExpOpenCashAdvanceDetail(pBranchId, pAdvanceNo){
					window.open(ServerName + App + '/ExpenseControl/CashAdvanceRequest/CashAdvanceTransactionViewDetail.aspx?BranchID=' + pBranchId + '&AdvanceNo=' + pAdvanceNo, 'CashAdvanceViewDetail', 'left=0, top=0, width=800, height=600, menubar=0, scrollbars=yes');
			}
			
			function ExpOpenPaymentRequestView(pBranchId, pRequestNo){
					window.open(ServerName + App + '/AccMnt/PaymentRequest/PaymentRequestInquiryView.aspx?BranchID=' + pBranchId + '&RequestNo=' + pRequestNo, 'PaymentRequestInquiryView', 'left=0, top=0, width=800, height=600, menubar=0, scrollbars=yes');
			}
			
			function ExpOpenViewBudget(pBranchId, pDeptID, pAccID, pReqNo, pPCNo, pModulName,pStyle){
					window.open(ServerName + App + '/ExpenseControl/BudgetMaintenance/ViewBudget.aspx?BranchID=' + pBranchId + '&DeptID=' + pDeptID + '&AccID=' + pAccID + '&ReqNo=' + pReqNo + '&PCNo=' + pPCNo + '&Modul=' + pModulName + '&Style=' + pStyle, 'ViewBudget', 'left=0, top=0, width=800, height=600, menubar=0, scrollbars=yes');
			//ModulName =	"PCRem" --> PettyCash Reimburse
			//				"PCTrans" --> PettyCash Transaction
			//				"PR" --> Payment Request
			}	
				 
				 
				 
				 
				 
				 
			