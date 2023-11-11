import { Nav } from "@/components/navigation/nav";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import picture2 from '@/public/picture2.png';
import Image from "next/image";


import student_loan from "@/lib/student_loan.json";
import Link from "next/link";

const articles = () => {
  return (
    <div>
      <div className="max-w-screen bg-court bg-fixed bg-repeat-round h-80 rounded-b-2xl">
        <Nav />
       
        <h1 className="font-bold flex justify-center text-center align-toppt-60 text-6xl">
          <span className="text-gray-950  text-6xl bg-white rounded px-2 bg-opacity-30">
            Student Loan
          </span>
        </h1>
      </div>
      
      <div className="container mx-auto p-4">
        <details className="bg-white shadow rounded group mb-4">
          <summary className="list-none flex flex-wrap items-center cursor-pointer focus-visible:outline-none focus:ring focus:ring-gray-600 rounded group-open:rounded-b-none group-open:z-[1] relative">
            <h3 className="flex flex-1 p-4 font-bold justify-center">
              EDUCATION LOAN
            </h3>
            <div className="flex w-10 item-cenmter justify-center ">
              <div className="border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left  "></div>
            </div>
          </summary>
          <div className="font-serif">
            Leading Indian banks offer education loans to help students achieve
            their academic objectives. A school loan with a payback duration of
            up to 20 years starts at 7.00% per year in interest. Both in-country
            and out-of-country higher education can benefit from education
            loans.<br></br> Education loan The lender will determine which
            courses are qualified for an education loan. An education loan may
            be obtained for courses beginning in Nursery. You can acquire a loan
            for full-time or part-time courses, as well as loans for working
            professionals, for higher education.
          </div>
        </details>
      </div>

      <div className="container mx-auto p-4">
        <details className="bg-white shadow rounded group mb-4">
          <summary className="list-none flex flex-wrap items-center cursor-pointer focus-visible:outline-none focus:ring focus:ring-gray-600 rounded group-open:rounded-b-none group-open:z-[1] relative">
            <h3 className="flex flex-1 p-4 font-bold justify-center">
              Compare Top Education Loan Offers 2023
            </h3>
            <div className="flex w-10 item-cenmter justify-center font-serif">
              <div className="border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left  "></div>
            </div>
          </summary>
          <div className="font-serif">
            <Table>
              <TableCaption>Loan Information </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Name of Bank </TableHead>
                  <TableHead>Intrest Rate%</TableHead>
                  <TableHead className="text-left">Processing Fees</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {student_loan.map((loan) => {
                  return (
                    <TableRow>
                      <TableCell className="font-medium">
                        <Link href={`${loan.link}`}>{loan.name}</Link>
                      </TableCell>

                      <TableCell>{loan.intrest}</TableCell>
                      <TableCell className="text-left">{loan.fees}</TableCell>
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
              List of Expenses Covered in Education Loan
            </h3>
            <div className="flex w-10 item-cenmter justify-center ">
              <div className="border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left  "></div>
            </div>
          </summary>
          <div className="font-serif">
            <p>Here's what the loan amount will cover:</p>
           <ol style={{ listStyle: 'initial' }}>
            <li>Tuition fees </li>
           <li> Hostel fees </li>
           <li> Travel expenses passage money for students studying abroad </li>
           <li> Insurance premium</li>
           <li> Cost of books/equipment/instruments/uniform </li>
           <li>Examination/laboratory/library fees </li>
           <li>Cost of a computer/laptop required for course completion</li>
           <li>Caution deposit, building fund/refundable deposit supported by institution bills/receipts </li>
           <li>Any other expenses required to complete the course such as study tours/thesis/project work </li>
            </ol>
          </div>
          
        </details>
      </div>

      <div className="container mx-auto p-4">
        <details className="bg-white shadow rounded group mb-4">
          <summary className="list-none flex flex-wrap items-center cursor-pointer focus-visible:outline-none focus:ring focus:ring-gray-600 rounded group-open:rounded-b-none group-open:z-[1] relative">
            <h3 className="flex flex-1 p-4 font-bold justify-center">
              Features & Benefits of Study Loan
            </h3>
            <div className="flex w-10 item-cenmter justify-center ">
              <div className="border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left  "></div>
            </div>
          </summary>
          <div className="font-serif">
            <ol style={{ listStyle: 'initial' }} >
           <li> Loan financing up to Rs.1 crore available. </li>
           <li>Loan repayment tenure upto 15 years.</li>
           <li>Get Education loans for studies in India and abroad.</li>
           <li>Some lenders offer loan disbursal before applying for a Visa.</li>
           <li>Door-step service to collect required documents. </li>
           <li> Children of the bank's employees enjoy preferential rates at several banks. </li>
           <li>Certain banks offer concessional interest rates to female students. </li>
           <li>Enjoy a moratorium period of up to 1 year after course completion. </li>
           <li>During this period, you do not have to make payments on the loan. </li>
           <li>Enjoy tax benefits up to 8 years on the interest paid.</li>
            </ol>
          </div>
        </details>
      </div>

      <div className="container mx-auto p-4">
        <details className="bg-white shadow rounded group mb-4">
          <summary className="list-none flex flex-wrap items-center cursor-pointer focus-visible:outline-none focus:ring focus:ring-gray-600 rounded group-open:rounded-b-none group-open:z-[1] relative">
            <h3 className="flex flex-1 p-4 font-bold justify-center">
              Tax Benefits on Education Loan
            </h3>
            <div className="flex w-10 item-cenmter justify-center ">
              <div className="border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left  "></div>
            </div>
          </summary>
          <div className="font-serif">
           <p> The interest you pay on your student loan can be deducted under
            Section 80E of the Income Tax Act of 1961. This advantage is only
            available to individual borrowers and is only offered for the
            purpose of higher education. The deduction is available to all
            fields of study, both domestically and internationally. It includes
            both vocational and academic courses. </p> <br></br>
            <p>It's important to remember that the tax deduction only applies to the interest portion of the
            EMI, not the principle. There is, however, no limit to how many
            times you can claim this benefit. You'll need a certificate from
            your bank or financial institution that separates the principal and
            interest components of your EMIs to qualify for this benefit.</p><br></br>
             <p>This  benefit is accessible for 8 years from the day you started repaying
            your loan or until the interest component is paid off, whichever
            comes first.</p>
          </div>
        </details>
      </div>

      <div className="container mx-auto p-4">
        <details className="bg-white shadow rounded group mb-4">
          <summary className="list-none flex flex-wrap items-center cursor-pointer focus-visible:outline-none focus:ring focus:ring-gray-600 rounded group-open:rounded-b-none group-open:z-[1] relative">
            <h3 className="flex flex-1 p-4 font-bold justify-center">
              Course are covered under an educational loan
            </h3>
            <div className="flex w-10 item-cenmter justify-center ">
              <div className="border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left  "></div>
            </div>
          </summary>
          <div className="font-serif">
            <ol  style={{ listStyle: 'initial' }}>

          <li> Undergraduate degrees</li>
          <li>Postgraduate degrees</li>
          <li> Undergraduate diplomas</li>
          <li>Postgraduate diplomas </li>
          <li>Vocational training courses</li>
          <li>Skill development courses </li>
          <li>Doctoral programmes</li>

             </ol>
          </div>
        </details>
      </div>

      <div className="container mx-auto p-4">
        <details className="bg-white shadow rounded group mb-4">
          <summary className="list-none flex flex-wrap items-center cursor-pointer focus-visible:outline-none focus:ring focus:ring-gray-600 rounded group-open:rounded-b-none group-open:z-[1] relative">
            <h3 className="flex flex-1 p-4 font-bold justify-center">
              List of Documents Required for Education Loan
            </h3>
            <div className="flex w-10 item-cenmter justify-center ">
              <div className="border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left  "></div>
            </div>
          </summary>
          <div  className="font-serif">
            
            Here is an indicative list of documents that most lenders ask:<br></br>
           <ol style={{listStyle : "initial"}}>
            <li> Admission letter from the educational institution</li>
            <li>Marksheets (previous education - school/college) </li>
            <li>Age proof</li>
            <li>ID proof</li>
            <li>Address proof </li>
            <li>Signature proof </li>
            <li>Salary slips </li>
            <li>Recent bank account statements</li>
            <li> ITR with income computation </li>
            <li> Audited balance sheet </li>
            <li>Recent bank statements </li>
            <li>Proof of turnover (service tax return/sales receipt)</li>
            <li>Completed application form with signature </li>
            <li>Latest passport size photographs </li>
            <li>Appropriate Visa for studies abroad</li>
            </ol>
          </div>
        </details>
      </div>

      <div className="container mx-auto p-4">
        <details className="bg-white shadow rounded group mb-4">
          <summary className="list-none flex flex-wrap items-center cursor-pointer focus-visible:outline-none focus:ring focus:ring-gray-600 rounded group-open:rounded-b-none group-open:z-[1] relative">
            <h3 className="flex flex-1 p-4 font-bold justify-center">
              How to Apply for an Education Loan
            </h3>
            <div className="flex w-10 item-cenmter justify-center ">
              <div className="border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left  "></div>
            </div>
          </summary>
          <div  className="font-serif">
            To apply for an education loan through the official bank website,
            follow these steps: <br></br>
            Step 1: Access the bank's official website. <br></br>Step
            2: Locate the education loan product page.<br></br> Step 3: Complete the
            application-cum-consent form by entering your personal and contact
            information.<br></br> Step 4: Provide your academic and financial details
            when contacted by the bank.<br></br> Step 5: Choose between the doorstep
            service option for a study loan or visit the bank in person to
            finalize the loan approval process.
          </div>
        </details>
      </div>

      <div className="container mx-auto p-4">
        <details className="bg-white shadow rounded group mb-4">
          <summary className="list-none flex flex-wrap items-center cursor-pointer focus-visible:outline-none focus:ring focus:ring-gray-600 rounded group-open:rounded-b-none group-open:z-[1] relative">
            <h3 className="flex flex-1 p-4 font-bold justify-center">
              How to Apply for an Education Loan Offline
            </h3>
            <div className="flex w-10 item-cenmter justify-center ">
              <div className="border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90 transition-transform origin-left  "></div>
            </div>
          </summary>
          <div className="font-serif">
            You can apply for an education loan offline by following the steps
            given below:<br></br> Step 1: Visit your chosen bank branch.<br></br> Step 2: Request
            a student loan application form.<br></br> Step 3: Fill out the form with
            personal, academic, and financial details.<br></br> Step 4: Confirm loan
            terms with a bank official.<br></br> Step 5: Submit the completed application
            form and documents.<br></br> Step 6: Receive a formal student loan agreement
            once approved.
          </div>
        </details>
      </div>
    </div>
  );
};

export default articles;
