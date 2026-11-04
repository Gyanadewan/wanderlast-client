"use client"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation"
 function DeleteDestinationsDailog({id}:{id:string}) {

    const handleDeleteDestination = async () => {
     const res =  await  fetch (`http://localhost:5000/destination/${id}`,{
              method: "DELETE"
     })
     const data = await  res.json()
    redirect("/destinations");

    }

  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button
              size="sm"
              className="border-destructive/40 bg-white text-destructive hover:bg-destructive/5 hover:text-destructive"
            >
              Delete
            </Button>} />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteDestination}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteDestinationsDailog
