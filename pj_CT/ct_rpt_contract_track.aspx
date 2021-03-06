<%@ Page Language="VB" MasterPageFile="~/pagesetting/MasterIntern.master" AutoEventWireup="false" CodeFile="ct_rpt_contract_track.aspx.vb" Inherits="ct_rpt_contract"  %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="ajaxToolkit" %>
   
<asp:Content ID="Content1" ContentPlaceHolderID="mpCONTENT" Runat="Server">
<link href="../script/calendar.css" rel="stylesheet" type="text/css" media="all" />
<script type="text/javascript" src="../script/calendar.js"></script>

<script type="text/javascript" language="Javascript">
<!-- hide script from older browsers
function openwindow(url,nama,width,height)
{
OpenWin = this.open(url, nama);
if (OpenWin != null)
{
  if (OpenWin.opener == null)
  OpenWin.opener=self;
}
OpenWin.focus();
} 
// End hiding script-->
</script>

<form id="form1" runat="server">
<ajaxToolkit:ToolkitScriptManager runat="Server" EnableScriptGlobalization="true" EnableScriptLocalization="true" ID="ToolkitScriptManager1" />

<asp:Table id="mlTABLE1" BorderWidth ="0" CellPadding ="0" CellSpacing="0" Width="100%" runat="server">
<asp:TableRow>   
<asp:TableCell> 
<asp:Panel ID="pnTOOlbAR" runat="server">  
    <table border="0" cellpadding="3" cellspacing="3">
        <tr>            
            <td>
                <asp:ImageButton id="btSearchRecord" ToolTip="SearchRecord" ImageUrl="~/images/toolbar/find.jpg" runat="server" />&nbsp;
                <asp:ImageButton id="btCancelOperation" ToolTip="CancelOperation" ImageUrl="~/images/toolbar/cancel.jpg" runat="server" />&nbsp;
                <asp:ImageButton id="btExCsv" ToolTip="csv" ImageUrl="~/images/toolbar/csvfile.png" runat="server"  Visible="false"/>
            </td>            
        </tr>               
    </table>
    <hr />
</asp:Panel>
</asp:TableCell>    
</asp:TableRow>

<asp:TableRow><asp:TableCell><p class="header1"><b><asp:Label id="mlTITLE" runat="server"></asp:Label></b></p></asp:TableCell></asp:TableRow>
<asp:TableRow><asp:TableCell><p><asp:Label ID="mlMESSAGE" runat="server" ForeColor="Purple" Font-Italic="true"></asp:Label></p></asp:TableCell></asp:TableRow>
<asp:TableRow><asp:TableCell><asp:HiddenField ID="mlSYSCODE" runat="server"/></asp:TableCell></asp:TableRow>
<asp:TableRow><asp:TableCell><p><asp:HyperLink ID="mlLINKDOC" runat="server"></asp:HyperLink></p></asp:TableCell></asp:TableRow>
<asp:TableRow><asp:TableCell><asp:Label id="mlSQLSTATEMENT" runat="server" Visible="False" /></asp:TableCell></asp:TableRow>

<asp:TableRow>
<asp:TableCell BorderWidth="0">
<asp:Panel ID="pnFILL" runat="server">   

<table width="100%" cellpadding="0" cellspacing="0" border="0">
<tr><td>
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
           <td>
                <asp:Label ID="lbCONTRACTNO1" Text="Contract No (From)" runat="server"></asp:Label>
                <asp:ImageButton ID="btSEARCHCONTRACT" ToolTip="Contract No" ImageUrl="~/images/toolbar/zoom.jpg" runat="server" />
            </td>
            <td>:</td>
            <td><asp:TextBox ID="txCONTRACTNO1" runat="server" Width="150"></asp:TextBox></td>            
            <td></td>
            <td>
                <asp:Label ID="lbDOCNO1" Text="Track No (From)" runat="server"></asp:Label>
                <asp:ImageButton ID="btSEARCHTRACK" ToolTip="Track No" ImageUrl="~/images/toolbar/zoom.jpg" runat="server" />
            </td>
            <td>:</td>
            <td><asp:TextBox ID="txDOCUMENTNO1" runat="server" Width="150"></asp:TextBox></td>
        </tr>
        
        <tr>            
            <td valign="top"></td>            
            <td valign="top"></td> 
            <td valign="top">
                <asp:Panel ID="pnSEARCHCONTRACT" runat="server">                            
                    <asp:Label ID="lbSEARCHCONTRACT" Text="Cust Name : " runat="server"></asp:Label>
                    <asp:TextBox ID="mlSEARCHCONTRACT" runat="server" BackColor="AntiqueWhite" Width="300"></asp:TextBox>
                    <asp:ImageButton ID="btSEARCHCONTRACTSUBMIT" ToolTip="Contract No" ImageUrl="~/images/toolbar/zoom.jpg" runat="server" />                            
                    
                    <asp:DataGrid runat="server" ID="mlDATAGRIDCONTRACT" 
                        HeaderStyle-BackColor="orange"  
                        HeaderStyle-VerticalAlign ="top"
                        HeaderStyle-HorizontalAlign="Center" 
                        OnItemCommand="mlDATAGRIDCONTRACT_ItemCommand"                               
                        autogeneratecolumns="false">	    
                        
                        <AlternatingItemStyle BackColor="#F9FCA8" />
                        <Columns>  
                            <asp:ButtonColumn  HeaderText = "Contract_No" DataTextField = "Field_ID" ></asp:ButtonColumn>
                            <asp:ButtonColumn HeaderText = "Site Card"  DataTextField = "Field_Name"></asp:ButtonColumn>
                        </Columns>
                     </asp:DataGrid> 
                </asp:Panel>   
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td valign="top">
                <asp:Panel ID="pnSEARCHTRACK" runat="server">                            
                    <asp:Label ID="lbSEARCHTRACK" Text="Cust Name : " runat="server"></asp:Label>
                    <asp:TextBox ID="mlSEARCHTRACK" runat="server" BackColor="AntiqueWhite" Width="300"></asp:TextBox>
                    <asp:ImageButton ID="btSEARCHTRACKSUBMIT" ToolTip="TRACK No" ImageUrl="~/images/toolbar/zoom.jpg" runat="server" />                            
                    
                    <asp:DataGrid runat="server" ID="mlDATAGRIDTRACK" 
                        HeaderStyle-BackColor="orange"  
                        HeaderStyle-VerticalAlign ="top"
                        HeaderStyle-HorizontalAlign="Center"
                        OnItemCommand="mlDATAGRIDTRACK_ItemCommand"                                
                        autogeneratecolumns="false">	    
                        
                        <AlternatingItemStyle BackColor="#F9FCA8" />
                        <Columns>  
                            <asp:ButtonColumn  HeaderText = "Track No" DataTextField = "Field_ID" ></asp:ButtonColumn>
                            <asp:ButtonColumn HeaderText = "Contract No"  DataTextField = "Field_Name"></asp:ButtonColumn>
                        </Columns>
                     </asp:DataGrid> 
                </asp:Panel>   
            </td>
        </tr>
        
        
        <tr>
            <td><asp:Label ID="lbDOCDATE1" Text="Track Date (From)" runat="server"></asp:Label></td>
            <td>:</td>
            <td>                             
                <asp:TextBox ID="txDOCDATE1" runat="server" Width="100"></asp:TextBox>                                                                    
                <input id="btDOCDATE1" runat="server" onclick="displayCalendar(mpCONTENT_txDOCDATE1,'dd/mm/yyyy',this)" type="button" value="D" style="background-color:Yellow " />                                                                      
                <asp:ImageButton runat="Server" ID="btCALENDAR1" ImageUrl="~/images/toolbar/calendar.png" AlternateText="Click to show calendar" />
                <ajaxtoolkit:CalendarExtender ID="CalendarExtender2" PopupButtonID="bt_ajDOCDATE1" TargetControlID="txDOCDATE1" Format="dd/MM/yyyy" runat="server" PopupPosition="Right"></ajaxtoolkit:CalendarExtender>
                <font color="blue">dd/mm/yyyy</font>
            </td>
            <td></td>
            <td><asp:Label ID="lbDOCDATE2" Text="Track Date (To)" runat="server"></asp:Label></td>
            <td>:</td>
            <td>                
                <asp:TextBox ID="txDOCDATE2" runat="server" Width="100"></asp:TextBox>                                                                                                          
                <input id="btJOINDATE2" runat="server" onclick="displayCalendar(mpCONTENT_txDOCDATE2,'dd/mm/yyyy',this)" type="button" value="D" style="background-color:Yellow " />                                
                <asp:ImageButton runat="Server" ID="btCALENDAR2" ImageUrl="~/images/toolbar/calendar.png" AlternateText="Click to show calendar" />
                <ajaxtoolkit:CalendarExtender ID="CalendarExtender1" PopupButtonID="bt_ajDOCDATE2" TargetControlID="txDOCDATE2" Format="dd/MM/yyyy" runat="server" PopupPosition="Right"></ajaxtoolkit:CalendarExtender>                 
                <font color="blue">dd/mm/yyyy</font>
            </td>
        </tr>
      
        <tr>
            <td valign="top"><p><asp:Label ID="lbLPRODUCT" runat="server" Text="Type of Description"></asp:Label></p></td>
            <td valign="top">:</td>
            <td valign="top">
                <asp:DropDownList ID="ddPRODUCT" runat="server"></asp:DropDownList>                
            </td>
            <td></td>
            <td></td>                              
            <td></td>
        </tr>   
        
        <tr>        
            <td valign="top">                        
                <asp:Label ID="lbUSER" Text="From User" runat="server"></asp:Label>
                <asp:ImageButton ID="btSEARCHUSERID" ToolTip="User ID" ImageUrl="~/images/toolbar/zoom.jpg" runat="server" />                                
            </td>
            <td valign="top">:</td>
             <td valign="top">
                <asp:TextBox ID="txUSERID" runat="server"> </asp:TextBox>                                
                <asp:ImageButton ID="btUSERID" ToolTip="User ID" ImageUrl="~/images/toolbar/autocomplete.jpg" runat="server" />
                <asp:Label ID="txUSERDESC" Width="250" Enabled="false" runat="server"></asp:Label>                 
            </td>
            <td></td>
            <td valign="top">                        
                <asp:Label ID="lbUSER2" Text="To User" runat="server"></asp:Label>
                <asp:ImageButton ID="btSEARCHUSERID2" ToolTip="User ID" ImageUrl="~/images/toolbar/zoom.jpg" runat="server" />                                
            </td>
            <td valign="top">:</td>
             <td valign="top">
                <asp:TextBox ID="txUSERID2" runat="server"> </asp:TextBox>                                
                <asp:ImageButton ID="btUSERID2" ToolTip="User ID" ImageUrl="~/images/toolbar/autocomplete.jpg" runat="server" />
                <asp:Label ID="txUSERDESC2" Width="250" Enabled="false" runat="server"></asp:Label>                 
            </td>
        </tr>
             
         <tr id="trU2" runat="server">
            <td></td>
            <td></td>
            <td>
                <asp:Panel ID="pnSEARCHUSERID" runat="server">
                <asp:Label ID="lbSEARCHUSERID" Text="Employee Name : " runat="server"></asp:Label>
                <asp:TextBox ID="mpSEARCHUSERID"  width="200" runat="server" BackColor="AntiqueWhite" ></asp:TextBox>
                <asp:ImageButton ID="btSEARCHUSERIDSUBMIT" ToolTip="Search Staff ID" ImageUrl="~/images/toolbar/zoom.jpg" runat="server" />
                
                <asp:DataGrid runat="server" ID="mlDATAGRIDUSERID" 
                    HeaderStyle-BackColor="orange"  
                    HeaderStyle-VerticalAlign ="top"
                    HeaderStyle-HorizontalAlign="Center"
                    OnItemCommand="mlDATAGRIDUSERID_ItemCommand"        
                    autogeneratecolumns="false">	    
                    
                    <AlternatingItemStyle BackColor="#F9FCA8" />
                    <Columns>  
                        <asp:ButtonColumn  HeaderText = "EmployeeID" DataTextField = "UserID" ></asp:ButtonColumn>
                        <asp:ButtonColumn HeaderText = "Name"  DataTextField = "Name"></asp:ButtonColumn>                        
                    </Columns>
                 </asp:DataGrid> 
                </asp:Panel>                       
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <asp:Panel ID="pnSEARCHUSERID2" runat="server">
                <asp:Label ID="lbSEARCHUSERID2" Text="Employee Name : " runat="server"></asp:Label>
                <asp:TextBox ID="mpSEARCHUSERID2"  width="200" runat="server" BackColor="AntiqueWhite" ></asp:TextBox>
                <asp:ImageButton ID="btSEARCHUSERID2SUBMIT" ToolTip="Search Staff ID" ImageUrl="~/images/toolbar/zoom.jpg" runat="server" />
                
                <asp:DataGrid runat="server" ID="mlDATAGRIDUSERID2" 
                    HeaderStyle-BackColor="orange"  
                    HeaderStyle-VerticalAlign ="top"
                    HeaderStyle-HorizontalAlign="Center"
                    OnItemCommand="mlDATAGRIDUSERID2_ItemCommand"        
                    autogeneratecolumns="false">	    
                    
                    <AlternatingItemStyle BackColor="#F9FCA8" />
                    <Columns>  
                        <asp:ButtonColumn  HeaderText = "EmployeeID" DataTextField = "USERID" ></asp:ButtonColumn>
                        <asp:ButtonColumn HeaderText = "Name"  DataTextField = "Name"></asp:ButtonColumn>                        
                    </Columns>
                 </asp:DataGrid> 
                </asp:Panel>                                      
                
            </td>         
         </tr>
         
        
        <tr>
            <td><p>Status</p></td>
            <td>:</td>
            <td><asp:DropDownList ID="ddSTATUS" runat="server"></asp:DropDownList></td>
            <td></td>
            <td><p>Report Type</p></td>
            <td>:</td>
            <td><asp:DropDownList ID="ddREPORT" runat="server"></asp:DropDownList></td>
        </tr>
        
        
   </table>
</td></tr>
</table>

</asp:Panel>
</asp:TableCell>
</asp:TableRow>



<asp:TableRow>
<asp:TableCell>
<asp:Panel ID="pnGRID" runat="server">
    <asp:DataGrid runat="server" ID="mlDATAGRID"
    OnItemCommand="mlDATAGRID_ItemCommand"
    
    AutoGenerateColumns = "true"
    ShowHeader="True"    
    AllowSorting="True"
    OnSortCommand="mlDATAGRID_SortCommand"    
    OnItemDataBound ="mlDATAGRID_ItemBound"    
    AllowPaging="True"    
    PagerStyle-Mode="NumericPages"
    PagerStyle-HorizontalAlign="center"
    OnPageIndexChanged="mlDATAGRID_PageIndex"  
    PageSize="200"  
    
    CssClass="Grid"
    >	    
    
    <HeaderStyle CssClass="GridHeader"></HeaderStyle>
    <ItemStyle CssClass="GridItem"></ItemStyle>
    <EditItemStyle  CssClass="GridItem" />
    <PagerStyle  CssClass="GridItem" />
    <AlternatingItemStyle CssClass="GridAltItem"></AlternatingItemStyle>
    
    <Columns>
    
    <asp:templatecolumn headertext="No" >
        <ItemTemplate>                    
            <%#Container.ItemIndex + 1%>
        </ItemTemplate>        
    </asp:templatecolumn> 
    
   
        
    </Columns>
 </asp:DataGrid>  
 
</asp:Panel>
</asp:TableCell>
</asp:TableRow>

</asp:Table>

<br /><br /><br /><br />
</form>
</asp:Content>

