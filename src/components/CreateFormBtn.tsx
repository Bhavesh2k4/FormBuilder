"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { ImSpinner9 } from "react-icons/im";
import { formSchema, formSchemaType } from '../../schemas/form';
import { Button } from "./ui/button";
import { BsPlusSquareDotted } from "react-icons/bs";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "./ui/form";
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from "./ui/use-toast";
import { CreateForm } from "../../actions/form";
import { useRouter } from "next/navigation";

function CreateFormBtn() {
    const router=useRouter()
    const form=useForm<formSchemaType>({
        resolver:zodResolver(formSchema)
    })

async function onSubmit(values:formSchemaType) {
  try{
    const formId=await CreateForm(values)
    toast({
        title:"Success",
        description:"Form Created Successfully",
    })
    router.push(`/builder/${formId}`);  
  }
  catch(error){
    toast({
        title:"Error",
        description:"Please Try Later",
        variant:"destructive",
    })
    console.error("Error creating form :",error)
  }
}
  return (
    <Dialog>
        <DialogTrigger asChild>
          <Button 
          variant="outline"
          className="group border border-primary/20 h-[190px] items-center justify-center flex flex-col hover:border-primary hover:cursor-pointer border-dashed gap-4">
            <BsPlusSquareDotted className="h-8 w-6 text-muted-foreground group-hover:text-primary"/>
            <p className="font-bold text-xl text-muted-foreground group-hover:text-primary">Create Form</p>
          </Button>
        </DialogTrigger>
        <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a New Form</DialogTitle>
          <DialogDescription>
            Create a new form with custom fields and settings.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <FormField
                    control={form.control}
                    name="name"
                    render={({field})=>(
                        <FormItem>
                            <FormLabel>
                                Name
                            </FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>                    )
                }/>
                <FormField
                    control={form.control}
                    name="description"
                    render={({field})=>(
                        <FormItem>
                            <FormLabel>
                                Description
                            </FormLabel>
                            <FormControl>
                                <Textarea rows={5} {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>                    )
                }/>
            </form>
        </Form>
        <DialogFooter>
            <Button onClick={form.handleSubmit(onSubmit)} disabled={form.formState.isSubmitting} className="w-full mt-3 " type="submit">
                {!form.formState.isSubmitting && <span>Create</span>}
                {form.formState.isSubmitting && (
                    <ImSpinner9 className="w-4 h-4 animate-spin" />
                )}
            </Button>
        </DialogFooter>
        <div className='flex flex-col gap-4 py-4'>

        </div>
        </DialogContent>
    </Dialog>
  )
}

export default CreateFormBtn