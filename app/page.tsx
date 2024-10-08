import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calculator, FileText, HelpCircle } from "lucide-react"
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}


export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">CanTax Pro</h1>
      <Tabs defaultValue="calculator" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="calculator">Tax Calculator</TabsTrigger>
          <TabsTrigger value="forms">Tax Forms</TabsTrigger>
          <TabsTrigger value="help">Help & Resources</TabsTrigger>
        </TabsList>
        <TabsContent value="calculator">
          <Card>
            <CardHeader>
              <CardTitle>Tax Calculator</CardTitle>
              <CardDescription>Calculate your estimated taxes quickly and easily.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="income">Annual Income</Label>
                    <Input id="income" placeholder="Enter your annual income" type="number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="deductions">Total Deductions</Label>
                    <Input id="deductions" placeholder="Enter total deductions" type="number" />
                  </div>
                </div>
                <Button className="w-full">
                  <Calculator className="mr-2 h-4 w-4" /> Calculate Taxes
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="forms">
          <Card>
            <CardHeader>
              <CardTitle>Tax Forms</CardTitle>
              <CardDescription>Access and fill out your Canadian tax forms.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-20 text-left justify-start">
                  <FileText className="mr-2 h-5 w-5" />
                  <div>
                    <div className="font-semibold">T1 General</div>
                    <div className="text-sm text-muted-foreground">Individual Income Tax Return</div>
                  </div>
                </Button>
                <Button variant="outline" className="h-20 text-left justify-start">
                  <FileText className="mr-2 h-5 w-5" />
                  <div>
                    <div className="font-semibold">T2</div>
                    <div className="text-sm text-muted-foreground">Corporation Income Tax Return</div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="help">
          <Card>
            <CardHeader>
              <CardTitle>Help & Resources</CardTitle>
              <CardDescription>Find answers to your tax-related questions.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  FAQ
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Tax Guide
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Contact Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}