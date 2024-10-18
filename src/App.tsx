import { Input } from './components/ui/input'
import { Label } from "./components/ui/label"
import { Textarea } from "./components/ui/textarea";
import { Checkbox } from "./components/ui/checkbox";
import { Button } from './components/ui/button';


function App() {
  return (
    <div className='w-full h-screen flex items-center justify-center bg-green-100'>
      <div className="grid w-full max-w-lg items-center text-left  m-auto bg-white pl-11 pr-11 pt-8  pb-10 rounded-xl shadow-lg flex-col gap-4 ">
        <div className="flex gap-3 ">
          <div>
            <Label htmlFor='First Name'>First Name <span className='text-[#0a7d69]'>*</span></Label>
            <Input type="text " name="First name" placeholder="" />
          </div><div>
            <Label htmlFor='First Name'>Last Name <span className='text-[#0a7d69]'>*</span></Label>
            <Input type="text " name="First name" placeholder="" />
          </div>

        </div>
        <Label htmlFor='First Name'>Email Address<span className='text-[#0a7d69]'>*</span></Label>
        <Input type="email" placeholder="" />

        <div className=" mt-3">Query Type <span className='text-[#0a7d69]'>*</span></div>
        <div className=" flex  gap-4 ">



          <div className="flex space-x-4 border border-gray-300 rounded-lg w-full p-3 items-center">
            <Label className="flex item-center">
              <Input type="radio" name="queryType" value="General Enquiry" className=" radio-input  w-[20px] h-[20px] mr-3 ml-[11px] font-[8px] rounded-lg" />General Enquiry
            </Label>

          </div>


          <div className="flex space-x-4 border border-gray-300 rounded-lg w-full p-3 items-center">
            <Label className="flex item-center">
              <Input type="radio" name="queryType" value="Support Request" className=" radio-input  w-[20px] h-[20px] mr-3 ml-[11px] font-[8px] rounded-lg" />Support Request
            </Label>

          </div>
        </div>

        <div className="flex flex-col mt-2">
          <Label htmlFor="Message" className="block mb-1 text-black text-sm ">Message  <span className='text-[#0a7d69]'>*</span></Label>
          <Textarea ></Textarea>
        </div>

        <div className="items-top flex space-x-2">
          <Checkbox id="terms1" />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              I consent to being contacted by the team
            </label>
          </div>
        </div>
        <Button className='bg-[#0a7d69]'>submit</Button>
      </div></div>

  )
}

export default App
