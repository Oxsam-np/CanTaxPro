'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Checkbox } from "../components/ui/checkbox"
import { Label } from "../components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordian"
import { FileText, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react'

const taxDocuments = [
  { id: 't4', name: 'T4 Slip', description: 'Statement of employment income, showing wages and taxes deducted.', essential: true },
  { id: 't4a', name: 'T4A Slip', description: 'Statement for pensions, annuities, self-employment, or other income.', essential: false },
  { id: 't5', name: 'T5 Slip', description: 'Statement of investment income such as dividends and interest.', essential: false },
  { id: 'rrsp', name: 'RRSP Contribution Receipts', description: 'Proof of contributions to a Registered Retirement Savings Plan (RRSP) for claiming deductions.', essential: true },
  { id: 't2202', name: 'T2202 (Tuition and Enrolment)', description: 'Certificate for tuition fees paid, used for claiming education credits.', essential: false },
  { id: 'medical', name: 'Receipts for Medical Expenses', description: 'Proof of eligible medical expenses such as prescriptions and dental care.', essential: true },
  { id: 'charity', name: 'Charitable Donation Receipts', description: 'Receipts from registered charities to claim a donation tax credit.', essential: true },
  { id: 'hbp', name: 'Home Buyers\' Plan (HBP) Receipts', description: 'Statements showing withdrawals and repayments for the Home Buyers\' Plan.', essential: false },
  { id: 'childcare', name: 'Childcare Expenses Receipts', description: 'Proof of payments made for childcare, used for claiming childcare expense deductions.', essential: false },
  { id: 'rental', name: 'Rental Income and Expense Records', description: 'Records for rental property income and expenses, used for reporting rental activity.', essential: false },
  { id: 'union', name: 'Union or Professional Dues Receipts', description: 'Receipts for union dues or professional fees to claim as a deduction.', essential: false },
  { id: 't3', name: 'T3 Slip', description: 'Statement for trust income allocations, such as mutual funds or other investments.', essential: false },
  { id: 'noa', name: 'Notice of Assessment (NOA)', description: 'A summary from the CRA of your previous year\'s tax return assessment.', essential: true },
  { id: 'capital', name: 'Capital Gains/Losses Statements', description: 'Records of gains or losses from selling investments like stocks or property.', essential: false },
  { id: 't4e', name: 'T4E Slip (EI Benefits)', description: 'Statement of Employment Insurance benefits received during the year.', essential: false },
]

const questions = [
  { id: 'employment', question: 'Did you work for any employer(s) this year?', relatedDocs: ['t4'] },
  { id: 'rrsp', question: 'Did you contribute to an RRSP during the tax year?', relatedDocs: ['rrsp'] },
  { id: 'medical', question: 'Did you or your dependents have any significant medical or dental expenses?', relatedDocs: ['medical'] },
  { id: 'charity', question: 'Did you donate to any registered charities this year?', relatedDocs: ['charity'] },
  { id: 'tuition', question: 'Were you or your dependents enrolled in a post-secondary institution?', relatedDocs: ['t2202'] },
  { id: 'rental', question: 'Do you own any rental properties that generated income?', relatedDocs: ['rental'] },
  { id: 'childcare', question: 'Did you pay for childcare for your child(ren) while you were working or studying?', relatedDocs: ['childcare'] },
  { id: 'investment', question: 'Did you earn any interest, dividends, or other investment income?', relatedDocs: ['t5', 't3'] },
  { id: 'capital', question: 'Did you sell any stocks, mutual funds, or real estate this year?', relatedDocs: ['capital'] },
]

export default function TaxDocumentChecklist() {
  const [checkedDocs, setCheckedDocs] = useState<string[]>([])
  const [expandedQuestions, setExpandedQuestions] = useState<string[]>([])

  const handleDocCheck = (docId: string) => {
    setCheckedDocs(prev => 
      prev.includes(docId) ? prev.filter(id => id !== docId) : [...prev, docId]
    )
  }

  const handleQuestionToggle = (questionId: string) => {
    setExpandedQuestions(prev => 
      prev.includes(questionId) ? prev.filter(id => id !== questionId) : [...prev, questionId]
    )
  }

  const progress = Math.round((checkedDocs.length / taxDocuments.length) * 100)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold gradient-text">Tax Document Checklist</CardTitle>
          <CardDescription className="text-lg">Ensure you have all the necessary documents for your Canadian personal income tax return.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 gradient-text">Document Progress</h3>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
              <div 
                className="bg-blue-600 h-4 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">{progress}% complete</p>
          </div>
          <div className="space-y-6">
            {taxDocuments.map((doc) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center space-x-3"
              >
                <Checkbox
                  id={doc.id}
                  checked={checkedDocs.includes(doc.id)}
                  // @ts-ignore
                  onCheckedChange={() => handleDocCheck(doc.id)}
                />
                <div className="flex-grow">
                  <Label
                    htmlFor={doc.id}
                    className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                      doc.essential ? 'text-blue-600 font-semibold' : 'text-gray-900'
                    }`}
                  >
                    {doc.name} {doc.essential && <span className="text-red-500">*</span>}
                  </Label>
                  <p className="text-sm text-gray-500 mt-1">{doc.description}</p>
                </div>
                {doc.essential && (
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Essential</span>
                )}
              </motion.div>
            ))}
          </div>
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4 gradient-text">Helpful Questions</h3>
            <Accordion type="multiple" className="w-full">
              {questions.map((q) => (
                <AccordionItem value={q.id} key={q.id}>
                  <AccordionTrigger
                    onClick={() => handleQuestionToggle(q.id)}
                    className="text-left hover:no-underline"
                  >
                    <div className="flex items-center">
                      <HelpCircle className="w-5 h-5 mr-2 text-blue-500" />
                      <span>{q.question}</span>
                    </div>
                    {expandedQuestions.includes(q.id) ? (
                      <ChevronUp className="w-4 h-4 text-blue-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-blue-500" />
                    )}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-gray-600 mb-2">If yes, make sure you have the following documents:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {q.relatedDocs.map((docId) => {
                        const doc = taxDocuments.find(d => d.id === docId)
                        return doc ? (
                          <li key={docId} className="mb-1">
                            <span className={checkedDocs.includes(docId) ? 'line-through text-gray-400' : ''}>
                              {doc.name}
                            </span>
                          </li>
                        ) : null
                      })}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between mt-6">
          <Button variant="outline" className="text-lg py-4 px-6">
            <FileText className="mr-2 h-5 w-5" /> Save Progress
          </Button>
          <Button className="text-lg py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105">
            Continue to Filing
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
