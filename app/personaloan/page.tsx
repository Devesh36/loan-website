"use client"
import Link from "next/link";
import { Nav } from "@/components/navigation/nav";
import personalcre from "@/lib/personalcre.json";
import React from 'react'
import personalcre2 from '@/lib/personalcre2.json';
import personaloan from '@/lib//personal_info.json';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
const page = () => {
  return (

    <div>
         <Nav />
         <div className="max-w-screen bg-court bg-fixed bg-repeat-round h-80 rounded-b-2xl">
        <h1 className="font-bold flex justify-center text-center align-toppt-40 text-6xl">
          <span className="text-gray-950  text-6xl bg-white rounded px-2 bg-opacity-30">
            Personal Loan
          </span>
        </h1>
      </div>
         

         <div className="container mx-auto p-4">
        <details className="bg-white shadow rounded group mb-4">
          <summary className="list-none flex flex-wrap items-center cursor-pointer focus-visible:outline-none focus:ring focus:ring-gray-600 rounded group-open:rounded-b-none group-open:z-[1] relative">
            <h3 className="flex flex-1 p-4 font-bold justify-center">
            Types of Personal Loan
            </h3>
            <div className="flex w-10 item-cenmter justify-center ">
              <div className="border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left  "></div>
            </div>
          </summary>
          <div className="font-serif">
          There are two types of personal loan schemes. They are:<br></br>
         1) Unsecured Personal Loan: Under these types of personal loan schemes, you don’t need to provide any security or collateral to the bank. If you meet all the eligibility criteria and have a decent credit score, then you can avail yourself of an unsecured personal loan.<br></br>
         2)Secured Personal Loan: Under these types of personal loan schemes, you will need to provide some form of security or collateral to the bank. A business loan or a gold loan is an example of a secured loan as you may have to provide some form of property to apply for a business loan and gold if you wish to avail a gold loan.
  </div>
        </details>
      </div>
     
      <div className="container mx-auto p-4">
        <details className="bg-white shadow rounded group mb-4">
          <summary className="list-none flex flex-wrap items-center cursor-pointer focus-visible:outline-none focus:ring focus:ring-gray-600 rounded group-open:rounded-b-none group-open:z-[1] relative">
            <h3 className="flex flex-1 p-4 font-bold justify-center">
            Top Personal Loan Schemes and Offers
            </h3>
            <div className="flex w-10 item-cenmter justify-center ">
              <div className="border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left  "></div>
            </div>
          </summary>
          <div className="font-serif">
            <Table>
              <TableCaption>Loan Information </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Bank </TableHead>
                  <TableHead>Best For</TableHead>
                  <TableHead className="text-left">Key Highlights</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {personaloan.map((loan) => {
                  return (
                    <TableRow>
                      <TableCell className="font-medium">
                        <Link href={`${loan.bank}`}>{loan.bank}</Link>
                      </TableCell>

                      <TableCell>{loan.best_for}</TableCell>
                      <TableCell className="text-left">
                        <li>{loan.key_highlights?.[1]}</li>
                        <li>{loan.key_highlights?.[2]}</li>
                        <li>{loan.key_highlights?.[3]}</li>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
            </div>
          
        </details>
      </div>
        
      <div className="container mx-auto p-4">
        <details className="bg-white shadow rounded group mb-4">
          <summary className="list-none flex flex-wrap items-center cursor-pointer focus-visible:outline-none focus:ring focus:ring-gray-600 rounded group-open:rounded-b-none group-open:z-[1] relative">
            <h3 className="flex flex-1 p-4 font-bold justify-center">
            Personal Loan Interest Rates
            </h3>
            <div className="flex w-10 item-cenmter justify-center ">
              <div className="border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left  "></div>
            </div>
          </summary>
          <div className="font-serif">
          The personal loan interest rates vary between 10.15% p.a. and 36% p.a. Depending on the loan amount availed by you, your credit score, and repayment tenure, the interest rate charged on your loan is decided. If you maintain a high credit score and have a good relationship with the bank, then the interest rate on your personal loan can be lowered.
  </div>
        </details>
      </div>
      <div className="container mx-auto p-4">
        <details className="bg-white shadow rounded group mb-4">
          <summary className="list-none flex flex-wrap items-center cursor-pointer focus-visible:outline-none focus:ring focus:ring-gray-600 rounded group-open:rounded-b-none group-open:z-[1] relative">
            <h3 className="flex flex-1 p-4 font-bold justify-center">
            Uses of Personal Loan
            </h3>
            <div className="flex w-10 item-cenmter justify-center ">
              <div className="border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left  "></div>
            </div>
          </summary>
          <div className="font-serif">
          What can you use a personal loan for? Since it is an unsecured loan without the need for any collateral, there are very few limitations on how you can use a personal loan. It can broadly be used for consolidating your debt (from other loans or credit cards), making high-value purchases for which you do not have cash in hand, or for emergency situations. It cannot be used for speculative purposes or for making investments in the stock market. Some of the common reasons that people take out personal loans for includes meeting sudden business or educational expenses, paying for a vacation, buying high-end electronic gadgets or household appliances, wedding expenses, emergency medical expenses, home renovations, etc. It can also be used for buying a vehicle if the rate of interest on the personal loan is lower than that of a vehicle loan. Thus, a personal loan has a wide variety of uses and can come in handy for meeting either planned or emergency expenditure.
  </div>
        </details>
      </div>

      <div className="container mx-auto p-4">
        <details className="bg-white shadow rounded group mb-4">
          <summary className="list-none flex flex-wrap items-center cursor-pointer focus-visible:outline-none focus:ring focus:ring-gray-600 rounded group-open:rounded-b-none group-open:z-[1] relative">
            <h3 className="flex flex-1 p-4 font-bold justify-center">
            Personal Loan Eligibility Criteria
            </h3>
            <div className="flex w-10 item-cenmter justify-center ">
              <div className="border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left  "></div>

            </div>
          </summary>
                

          <div className="font-serif">
            <Table>
              <TableCaption>Eligibiliity </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Criteria </TableHead>
                  <TableHead>Salaried</TableHead>
                  <TableHead className="text-left">Self-Employed</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {personalcre.map((loan) => {
                  return (
                    <TableRow>
                      <TableCell className="font-medium">
                        <Link href={`${loan.criteria}`}>{loan.criteria}</Link>
                      </TableCell>

                      <TableCell>{loan.salaried}</TableCell>
                      <TableCell className="text-left">
                       {loan.selfemployed}
                        
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
            </div>
        </details>
      </div>
      <div className="container mx-auto p-4">
        <details className="bg-white shadow rounded group mb-4">
          <summary className="list-none flex flex-wrap items-center cursor-pointer focus-visible:outline-none focus:ring focus:ring-gray-600 rounded group-open:rounded-b-none group-open:z-[1] relative">
            <h3 className="flex flex-1 p-4 font-bold justify-center">
            Documents Required to apply Personal Loan

            </h3>
            <div className="flex w-10 item-cenmter justify-center ">
              <div className="border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left  "></div>
            </div>
          </summary>
          <div className="font-serif">
            <Table>
              <TableCaption>Eligibiliity </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Requirements </TableHead>
                  <TableHead>Salaried Individuals</TableHead>
                  <TableHead className="text-left">Self Employed</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {personalcre2.map((loan) => {
                  return (
                    <TableRow>
                      <TableCell className="font-medium">
                        {loan.Requirment}
                      </TableCell>

                      <TableCell>{loan["Salaried Individuals"]}</TableCell>
                      <TableCell className="text-left">
                       {loan["Self Employed"]}
                        
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>

                <div>
                    <p>If you are an NRI looking to borrow a personal loan, these are the documents that you will need to submit to the lender:</p>
                    <ol style={{listStyle : "initial"}}>
                        <li>Copy of your Passport</li>
                        <li>Visa Copy</li>
                        <li>Your official Email ID or the Email ID of the HR</li>
                        <li>Bank Statements</li>
                        <li>Salary Certificate or salary slips</li>
                        <li>NRO/NRE bank statements of the last 6 Months</li>
                        <li>Proof of Identity, Residence, Income, and Assets</li>
                        <li>Recent passport-size Photographs of yourself and the guarantors </li>
                          </ol>
                </div>
            </div>
        </details>
      </div>
      <div className="container mx-auto p-4">
        <details className="bg-white shadow rounded group mb-4">
          <summary className="list-none flex flex-wrap items-center cursor-pointer focus-visible:outline-none focus:ring focus:ring-gray-600 rounded group-open:rounded-b-none group-open:z-[1] relative">
            <h3 className="flex flex-1 p-4 font-bold justify-center">
            Modes of Loan Payment or Repayment
            </h3>
            <div className="flex w-10 item-cenmter justify-center ">
              <div className="border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left  "></div>
            </div>
          </summary>
          <div className="font-serif">
          There are a number of repayment modes which are offered by lenders. Although these modes might differ from lender to lender, the most common modes of repayment can be summed up as follows:<br></br>

1)Electronic Clearance System (ECS): The ECS or Electronic Clearance System is one of the most commonly used repayment methods. It is an electronic mode through which funds are transferred from one bank to another.<br></br>
2)Post Dated Cheques (PDCs): Post Dated Cheques, as the name suggests, are cheques which are issued by you for a future date. The lender will use these cheques on the mentioned date to deposit or encash the amount mentioned on it.<br></br>
3)National Automated Clearing House: The National Payment Corporation of India (NPCI) offers a program called NACH to all the banks and financial institutions. The NACH allows the processing of transactions in real time. This method can be used for your loan repayments.<br></br>
4)Debit mandate or standing instruction: You can give an instruction to your bank to pay off a particular amount of money to another bank or bank account at a regular interval. This is known as standing instruction or debit mandate. Your bank will be paying off the stipulated amount towards the repayment of your loan on a regular basis through this system.
  </div>
        </details>
      </div>
      <div className="container mx-auto p-4">
        <details className="bg-white shadow rounded group mb-4">
          <summary className="list-none flex flex-wrap items-center cursor-pointer focus-visible:outline-none focus:ring focus:ring-gray-600 rounded group-open:rounded-b-none group-open:z-[1] relative">
            <h3 className="flex flex-1 p-4 font-bold justify-center">
            How to Improve your Chances of Getting a Personal Loan?
            </h3>
            <div className="flex w-10 item-cenmter justify-center ">
              <div className="border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left  "></div>
            </div>
          </summary>
          <div className="font-serif">
          <ol style={{listStyle : "initial"}}>
          <li>Credit Clean-up: One of the main factors taken into consideration by lenders is your credit score. Getting a personal loan is easier with a high credit score. If your score is low, you must check your reports to see if there are any errors. Sometimes, simple errors could have an adverse effect on your scores, and if you find any of these, you must report them to CIBIL.</li>
<li>Rebalancing your income and debts: Lenders ask for proof of income when you apply for personal loans in order to ascertain your debt-to-income ratio. Consider the sale of liquid assets like stocks or earning more through a part-time job to increase your annual income. Doing so will increase your debt-to-income ratio and increase your chances of getting a loan.</li>
<li>xConsider Co-signers/Guarantors: If you are finding it hard to get a personal loan on your own accord, you can apply for one by adding a co-signer or guarantor. The person you choose as a guarantor must have a good credit score. Their main aim is to guarantee that you will repay the loan. However, they will also be liable to repay the loan themselves if you are unable to do so. Picking an individual with a credit score over 750 will considerably increase your chances of getting a personal loan.</li>
<li>Limit Your Borrowing: It can be risky to ask for more money than you require to meet your financial targets. Make sure that you calculate how much you need and apply only for that specific amount.</li>
<li>Choose the Right Lender: Every lender has their own requirements when it comes to credit scores and income. When looking for personal loans, pick a lender whose eligibility criteria you meet and apply accordingly. The problem with applying with multiple lenders is that each of them will check your credit score, and each time your full credit report is pulled out, your credit score drops, albeit marginally.</li>
</ol>
  </div>
        </details>
      </div>



      <div className="container mx-auto p-4">
        <details className="bg-white shadow rounded group mb-4">
          <summary className="list-none flex flex-wrap items-center cursor-pointer focus-visible:outline-none focus:ring focus:ring-gray-600 rounded group-open:rounded-b-none group-open:z-[1] relative">
            <h3 className="flex flex-1 p-4 font-bold justify-center">
            How to Avoid Rejection of Personal loan Applications?
            </h3>
            <div className="flex w-10 item-cenmter justify-center ">
              <div className="border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left  "></div>
            </div>
          </summary>
          <div className="font-serif">
          The approval of a personal loan application depends on many factors. When you apply for a loan, you should make sure that you are fulfilling all the factors to ensure the approval of your loan application. The eligibility criteria for personal loans may vary from lender to lender. However, there are some common criteria which include the age of the applicant, his or her income, credit score, the status of employment, and so on. Before you apply for a loan, make sure that all the eligibility criteria are being fulfilled. This will help you avoid the rejection of your loan application. Although there are other options that you can resort to in case your loan application gets rejected, it is recommended to double-check before applying to avoid the chances of rejection of loan application.
          </div>
        </details>
      </div>

      <div className="container mx-auto p-4">
        <details className="bg-white shadow rounded group mb-4">
          <summary className="list-none flex flex-wrap items-center cursor-pointer focus-visible:outline-none focus:ring focus:ring-gray-600 rounded group-open:rounded-b-none group-open:z-[1] relative">
            <h3 className="flex flex-1 p-4 font-bold justify-center">
            Tips for Successful Personal Loan Application

            </h3>
            <div className="flex w-10 item-cenmter justify-center ">
              <div className="border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left  "></div>
            </div>
          </summary>
          <div className="font-serif">
       <p>  There are a few important things to keep in mind when searching for a personal loan. Check out list of most helpful tips that will certainly help you with your personal loans.</p>
       <ol style={{listStyle:"initial"}}>

      

<li>Assess the need for your loan</li>
<li>Do proper research to get the best rate</li>
<li>Check your credit history</li>
<li>Review the fine print on your loan document carefully</li>
<li>Choose your loan tenure by assessing your repayment ability</li>
<li>Choose an affordable interest rate</li>
<li>Select your loan amount as per your convenience</li>
<li>Check your EMIs properly</li>
<li>Compare the processing fee</li>
<li>Select fixed or variable interest rate according to your preference</li>
</ol>
          </div>
        </details>
      </div>
      <div className="container mx-auto p-4">
        <details className="bg-white shadow rounded group mb-4">
          <summary className="list-none flex flex-wrap items-center cursor-pointer focus-visible:outline-none focus:ring focus:ring-gray-600 rounded group-open:rounded-b-none group-open:z-[1] relative">
            <h3 className="flex flex-1 p-4 font-bold justify-center">
            Risk And Consideration 
            </h3>
            <div className="flex w-10 item-cenmter justify-center ">
              <div className="border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left  "></div>
            </div>
          </summary>
          <div className="font-serif">
       <p>  Some of the risks related to a personal loan scheme are mentioned below:</p>
       <ol style={{listStyle:"initial"}}>

      

<li>High interest rate: If your credit score is low, then the bank may charge you a higher interest rate since you might be at a risk of not being able to pay your loan amount on time. Similarly, if you delay the payment of loan or credit card bills, or any other loans, your credit score will drop, making it difficult to apply for a personal loan. If you do apply for a loan in the future, the bank will charge you a higher interest rate.</li>
<li>Debt Burden and Financial Implications: If you avail yourself of a personal loan, then it must be understood that it is a debt you owe to the bank. Hence, it becomes important that you repay your loan on a timely basis. If you fail to repay the loan amount on time, then you would be penalised for it which in turn means you will have to pay more of your pocket, which in turn will deplete your savings further. Hence, always avail a loan amount which you can repay on time and do research all the personal loan schemes before applying for the one most suitable for you.</li>
<li>Impact on credit score: If you fail to repay your personal loan on time, your credit score will be affected which in turn will make it more difficult to apply for loans in future. Before applying for a personal loan, make sure you do not have any outstanding amount or EMIs to be paid to any lenders. Repay all your existing loans and then apply for a personal loan so that your credit score remains high, and you avail a personal loan at a lower interest rate.</li>
<li>Hidden fees and charges: Most banks when offering personal loan may also levy certain charges apart from the processing fee. These fees might be prepayment fees, cancellation fees, prepayment fees, etc. Hence, do check or simply enquire the bank about such fees and charges so that you can decide better the personal loan scheme most suitable for you.</li>
<li>Potential fraudulent activities: There is always a risk of potentially fraudulent activities when you are looking to apply for a personal loan. Top banks and lenders will always conduct their due diligence and will check your credit score, employment status, etc. before deciding to approve your loan application. A fraudulent company will not be interested in your credit score and will promise you approved loans, while also asking you for upfront payment. Make sure you conduct your own research such as whether the company offering you a loan is a registered entity and recognised by the Reserve Bank of India (RBI). If you have received any suspicious links which promise to approve your loan application, do not click on it. Do conduct a proper research and check the loan offering entity is authentic or not and then decide whether to apply for a loan from them.</li>
</ol>
          </div>
        </details>
      </div>

                    





    </div>
  )
}

export default page