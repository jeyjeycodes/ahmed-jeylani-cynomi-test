"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  sleepDataFields,
  sleepDataFormSchema,
} from "@/forms/sleep-data-form/sleep-data-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Gender } from "@prisma/client";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function Home() {
  const router = useRouter();
  const form = useForm<sleepDataFields>({
    resolver: zodResolver(sleepDataFormSchema),
    defaultValues: {
      name: "",
      gender: undefined,
      sleepDuration: 0,
    },
  });

  const handleSubmit = async ({
    name,
    gender,
    sleepDuration,
  }: sleepDataFields) => {
    try {
      await axios.post("/api/sleep-data", { name, gender, sleepDuration });
      router.push("/sleep-entries");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-muted">
      <div>
        <h1 className="text-4xl mb-10">Welcome to the Sleep Tracker</h1>
        <div className="bg-white p-10 rounded-lg">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className={"space-y-4 flex flex-col"}
            >
              <FormField
                control={form.control}
                name={"name"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input type={"text"} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={"gender"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your gender" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={Gender.MALE}>Male</SelectItem>
                        <SelectItem value={Gender.FEMALE}>Female</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={"sleepDuration"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sleep Duration (Hours)</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        min={1}
                        max={24}
                        type={"number"}
                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className={"mt-6 gap-2 self-center"} type={"submit"}>
                {form.formState.isSubmitting && (
                  <Loader2 className="animate-spin" size={16} />
                )}
                Add sleep data
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
}
