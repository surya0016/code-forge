import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PlayIcon } from "lucide-react"

interface CodeEditorProps {
  code: string
  setCode: (code: string) => void
  language: string
  setLanguage: (language: string) => void
  onRun: () => void
}

const languages = [
  { value: "python", label: "Python" },
  { value: "javascript", label: "JavaScript" },
  { value: "java", label: "Java" },
  { value: "cpp", label: "C++" },
]

export default function CodeEditor({ code, setCode, language, setLanguage, onRun }: CodeEditorProps) {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang.value} value={lang.value}>
                  {lang.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button onClick={onRun} className="gap-2">
          <PlayIcon className="h-4 w-4" />
          Run
        </Button>
      </div>
      <div className="flex-1 p-0 overflow-hidden">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-full p-4 font-mono text-sm bg-muted resize-none focus:outline-none"
          placeholder={`# Write your ${languages.find((l) => l.value === language)?.label || ""} code here...`}
          spellCheck="false"
        />
      </div>
    </div>
  )
}

