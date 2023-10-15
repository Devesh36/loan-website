import { BellRing, Check } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";

type CardProps = React.ComponentProps<typeof Card>;

export function CardDemo({ className, ...props }: CardProps) {
  return (
    <Card
      className={cn(
        "w-[380px] rounded-3xl bg-gradient-to-r from-sky-300 to-teal-300",
        className
      )}
      {...props}
    >
      <CardHeader>
        <CardTitle>STUDENT LOAN </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <p>There are advantages of student loan is as follows</p>
      </CardContent>
      <CardFooter>
        <Link href="/studentloan">
          <Button className="w-full">READ MORE!</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
export function CardCARLOAN({
  className = "right-12 rounded-3xl bg-gradient-to-r from-sky-300 to-teal-300",
  ...props
}: CardProps) {
  return (
    <div className="right-5  border-r-28px box-border-28px">
      <Card className={cn("w-[380px]", className)} {...props}>
        <CardHeader>
          <CardTitle>CAR LOAN </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <p>There are advantages of loan is as follows</p>
        </CardContent>
        <CardFooter>
          <div>
            <Button className="w-full">READ MORE!</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
export function CardP({
  className = "right-12 rounded-3xl bg-gradient-to-r from-sky-300 to-teal-300",
  ...props
}: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>PERSONAL LOAN </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <p>There are advantages of personal loan is as follows</p>
      </CardContent>
      <CardFooter>
        <div>
          <Link href="/personaloan">
            <Button className="w-full">READ MORE!</Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
export function CardH({
  className = "right-12 rounded-3xl bg-gradient-to-r from-sky-300 to-teal-300",
  ...props
}: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>HOUSE LOAN </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <p>There are advantages of house loan is as follows</p>
      </CardContent>
      <CardFooter>
        <div>
         <Link href="/homeloan"> 
         <Button className="w-full">READ MORE!</Button></Link>
        </div>
      </CardFooter>
    </Card>
  );
}
