"use client";
import { Nav } from "@/components/navigation/nav";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ValidationError, useForm } from "@formspree/react";

import { createContext } from "react";
import EmiCal from "@/components/emi/emiCal";
import { CardCARLOAN, CardDemo, CardH, CardP } from "./card";
import LoanCalculator from "@/components/emi/emiCal";
import Link from "next/link";
export default function Home() {
  return (
  
    <div>
      <Nav />
      <div className="flex justify-between mr-28">
        <svg
          className="mt-1̉6 -rotate-6 -ml-8"
          xmlns="http://www.w3.org/2000/svg"
          width="175"
          height="542"
          viewBox="0 0 175 542"
          fill="none"
        >
          <path
            d="M-212.804 2.23636C-363.5 13.6991 -435.535 201.776 -452.716 294.382C-456.671 310.506 -460.542 354.966 -444.392 403.811C-424.205 464.869 -301.091 421.057 -248.674 436.394C-196.257 451.73 -145.316 502.887 -66.0866 533.828C13.1427 564.769 69.3888 497.897 64.7325 420.116C60.0762 342.334 203.622 373.843 169.132 207.592C134.641 41.3411 -24.4354 -12.0921 -212.804 2.23636Z"
            fill="url(#pattern0)"
          />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="0.0220204"
              height="0.0253594"
            >
              <use
                href="#image0_1_364"
                transform="scale(0.000550509 0.000633984)"
              />
            </pattern>
            <image
              id="image0_1_364"
              width="40"
              height="40"
              href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAXZJREFUWEftldFtwkAMhv1fxDsjwAQtWyChO8EE0AloJyhswAaFCYDLS7YgG8AIeY1AuDoUUKhKlcTVqaouT5Hi//z7i88GlZ7hcNg+n89TZp4A6BSfUgBpnufzJEkO5Xgf77gmGY1G49PptADQfpA4Y+Z5HMcLH8auOS4GjTFTIqqUOIqiyXq9XvkyiX6/32m1WrsfyH31kimlupvNJvNhElrrJYBxzWRza+2spqZROIwxOyJ6rqNm5kMcx906mqaxziA3EVtrbxesib6q5u8b1FrvSzOvamGptbZXNVgS5wi6Zn+vcwiA5Xa7famjaRqLYnvsiejRgL47m5mz4/HY87VVLo2utXar7aNKlcz85nOb3G7iYDB4jaLI/epvSTpyROTMLasU8lsxd6Oi2CozAE/X2ehmHoCVUmrha3uUi/MyyyQ0g0EJPacNBANBKQGpPvRgICglINWHHgwEpQSk+tCDgaCUgFQfejAQlBKQ6kMP/nuCn7YlcClgZCksAAAAAElFTkSuQmCC"
            />
          </defs>
        </svg>
        <div className="-ml-40 relative">
          <div className="mt-32 ">
            <h1 className="text-5xl font-semibold text-[#10375C]">
              At <span className="text-cyan-600 ">LoanGuru</span> we put{" "}
              <br></br>the customer first.
            </h1>
            <div className=""></div>
            <div className="mt-6 ml-1">
              LoanGuru is a guiding website for variety of loans
            </div>

            <div className="mt-6 ml-1">
              We specialize in calculating Emi and many loan suggestions
            </div>
          </div>

          <Link href={"#card"}>
            <div className="mt-9" >
              <Button className="bg-gradient-to-r from-sky-300 to-teal-300 rounded-full pl-11 pr-11  font-normal ">
                GET STARTED
              </Button>
            </div>
          </Link>
        </div>
        <Image
          unoptimized
          src="family.png"
          width={400}
          height={400}
          alt={"family"}
          className="mt-32"
        />
      </div>
      <div className="bg-gradient-to-tr from-neutral-50 to-indigo-100 h-80 w-80 rounded-full -mt-96 ml-80"></div>
    
      <div className=" mt-48 pt-36 "  id="card">
        <h2 className="text-4xl font-semibold  text-[#10375C] text-center">
          There Are 4 types of loans which we suggest:
        </h2>
      </div>
        <div className=" justify-between">
          <div className="flex gap-20 mt-10 justify-center " >
            <CardDemo />
            <CardCARLOAN />
          </div>
          <div className="flex gap-20 mt-10 justify-center" >
            <CardP />
            <CardH />
          </div>
        </div>
      <div className="mb-0">
        <LoanCalculator/>
      </div>
    </div>
  );
}
