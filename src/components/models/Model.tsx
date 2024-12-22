import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
  //   DialogTrigger,
} from "@/components/ui/dialog";

interface IProps {
  title: string;
  description?: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  children?: React.ReactNode;
  buttonLabel: string;
}

export function Model({
  title,
  description,
  isOpen,
  onClose,
  onConfirm,
  buttonLabel,
  children,
}: IProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children}
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          {onConfirm ? (
            <Button onClick={onConfirm} type="submit">
              {buttonLabel}
            </Button>
          ) : (
            <Button type="submit">{buttonLabel}</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// <DialogTrigger asChild>
// <Button variant="outline">Edit Profile</Button>
// </DialogTrigger>
