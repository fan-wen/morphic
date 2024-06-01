import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: "What's Apple's FinTech strategy?",
    message: "What's Apple's FinTech strategy?"
  },
  {
    heading: "What's Visa's growth strategy?",
    message: "What's Visa's growth strategy?"
  },
  {
    heading: "What are the recent regulatory changes in BaaS in the US?",
    message: "What are the recent regulatory changes in BaaS in the US?"
  },
  {
    heading: "How do B2B FinTechs compare to B2C FinTechs in 2024?",
    message: "How do B2B FinTechs compare to B2C FinTechs in 2024?"
  },
  {
    heading: "Synctera vs Unit",
    message: "Synctera vs Unit"
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowUpRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
