import { Badge } from "@/components/badge/Badge";
import  IndividualSvg  from '@/assets/images/signUp/ind.svg'
import  BusinessSvg  from '@/assets/images/signUp/business.svg'

export default function SignUp() {
    
  return (
      <>
       <div>test</div>
       <Badge 
          onClick={() => {}} 
          svg={IndividualSvg}  
          title="Individual" 
          description="For individuals who want to participate, develop or build with a click of a button. "
        />
       <Badge 
          onClick={() => {}}
          svg={BusinessSvg} 
          title="Business" 
          description="For companies and institutions who need access to our suite of tools and real-time insights to manage and run their operations. "
        />
      </>
    )
  }