
import './YourOrders.css';

const Receipt = (props) => {
  return (
  <>
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
<div class="container">
   <div class="col-md-12">
      <div class="invoice">
         <div class="invoice-company text-inverse f-w-600">
            <span class="pull-right hidden-print">
            {/* <a href="javascript:;" class="btn btn-sm btn-white m-b-10 p-l-5"><i class="fa fa-file t-plus-1 text-danger fa-fw fa-lg"></i> Export as PDF</a> */}
            <button onClick={() => window.print()} class="btn btn-sm btn-white m-b-10 p-l-5"><i class="fa fa-print t-plus-1 fa-fw fa-lg"></i> Print</button>
            </span>
            SCE Tours
         </div>
         <div class="invoice-header">
            <div class="invoice-from">
               <small>From</small>
               <address class="m-t-5 m-b-5">
               <strong class="text-inverse">SCE Tours</strong><br/>
                  Zabutinsky<br/>
                  Ashdod<br/>
                  Phone: (123) 456-7890<br/>
                  Fax: (123) 456-7890
               </address>
            </div>
            {/* <div class="invoice-to">
               <small>to</small>
               <address class="m-t-5 m-b-5">
                  <strong class="text-inverse">Company Name</strong><br/>
                  Zabutinsky<br/>
                  Ashdod<br/>
                  Phone: (123) 456-7890<br/>
                  Fax: (123) 456-7890
               </address>
            </div> */}
            <div class="invoice-date">
               <small>Invoice</small>
               <div class="date text-inverse m-t-5">2021</div>
               <div class="invoice-detail">
                  Services Product
               </div>
            </div>
         </div>
         <div class="invoice-content">
            <div class="table-responsive">
               <table class="table table-invoice">
                  <thead>
                     <tr>
                        <th>Package</th>
                        <th class="text-center" width="10%">FROM</th>
                        <th class="text-center" width="10%">TO</th>
                        <th class="text-right" width="20%">STATUS</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>
                           <span class="text-inverse">{props.dealName}</span><br/>
                           
                        </td>
                        <td class="text-center">{props.fromDate}</td>
                        <td class="text-center">{props.toDate}</td>
                        <td class="text-right">{props.status}</td>
                     </tr>
             
              
                  </tbody>
               </table>
            </div>
            <div class="invoice-price">
               <div class="invoice-price-left">
                  {/* <div class="invoice-price-row">
                     <div class="sub-price">
                        <small>SUBTOTAL</small>
                        <span class="text-inverse">$4,500.00</span>
                     </div>
                     <div class="sub-price">
                        <i class="fa fa-plus text-muted"></i>
                     </div>
                     <div class="sub-price">
                        <small>PAYPAL FEE (5.4%)</small>
                        <span class="text-inverse">$108.00</span>
                     </div>
                  </div> */}
               </div>
               <div class="invoice-price-right">
                  <small>TOTAL</small> <span class="f-w-600">{props.dealPrice}</span>
               </div>
            </div>
         </div>
         {/* <div class="invoice-note">
            * Make all cheques payable to [Your Company Name]<br/>
            * Payment is due within 30 days<br/>
            * If you have any questions concerning this invoice, contact  [Name, Phone Number, Email]
         </div> */}
         <div class="invoice-footer">
            <p class="text-center m-b-5 f-w-600">
               THANK YOU FOR YOUR BUSINESS
            </p>
            <p class="text-center">
               <span class="m-r-10"><i class="fa fa-fw fa-lg fa-globe"></i> sce.co.il</span>
               <span class="m-r-10"><i className="fa fa-fw fa-lg fa-phone-volume"></i> 054-18192302</span>
               <span class="m-r-10"><i class="fa fa-fw fa-lg fa-envelope"></i>sce@gmail.com</span>
            </p>
         </div>
      </div>
   </div>
</div>
</>
  
  );
};

export default Receipt;
