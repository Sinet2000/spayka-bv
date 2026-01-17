"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";

export function ContactForm() {
  const t = useTranslations("contactForm");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSchema = z.object({
    name: z.string().min(2, t("errorMinName")),
    email: z.string().email(t("errorInvalidEmail")),
    phone: z.string().min(10, t("errorMinPhone")),
    company: z.string().optional(),
    serviceType: z.string().min(1, t("errorSelectService")),
    message: z.string().min(10, t("errorMinMessage")),
  });

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      serviceType: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    toast.success(t("successMessage"));
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <Card className="shadow-lg">
      <CardHeader className="pb-4 sm:pb-6">
        <CardTitle className="text-xl sm:text-2xl">{t("title")}</CardTitle>
      </CardHeader>
      <CardContent className="px-4 sm:px-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 sm:space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm sm:text-base">
                      {t("fullName")} *
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("fullNamePlaceholder")}
                        {...field}
                        className="h-12 text-base"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm sm:text-base">
                      {t("email")} *
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder={t("emailPlaceholder")}
                        {...field}
                        className="h-12 text-base"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm sm:text-base">
                      {t("phone")} *
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("phonePlaceholder")}
                        {...field}
                        className="h-12 text-base"
                        type="tel"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm sm:text-base">
                      {t("company")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("companyPlaceholder")}
                        {...field}
                        className="h-12 text-base"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm sm:text-base">
                    {t("serviceType")} *
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="h-12 text-base">
                        <SelectValue
                          placeholder={t("serviceTypePlaceholder")}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="air-freight">
                        {t("serviceAirFreight")}
                      </SelectItem>
                      <SelectItem value="customs">
                        {t("serviceCustoms")}
                      </SelectItem>
                      <SelectItem value="logistics">
                        {t("serviceLogistics")}
                      </SelectItem>
                      <SelectItem value="insurance">
                        {t("serviceInsurance")}
                      </SelectItem>
                      <SelectItem value="express">
                        {t("serviceExpress")}
                      </SelectItem>
                      <SelectItem value="supply-chain">
                        {t("serviceSupplyChain")}
                      </SelectItem>
                      <SelectItem value="other">{t("serviceOther")}</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm sm:text-base">
                    {t("message")} *
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={t("messagePlaceholder")}
                      className="min-h-[120px] sm:min-h-[150px] text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 min-h-[56px] text-base sm:text-lg shadow-md hover:shadow-lg transition-all"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  {t("sending")}
                </>
              ) : (
                t("sendMessage")
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
