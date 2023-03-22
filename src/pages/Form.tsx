import React from "react";
import { useForm, Controller, FormProvider } from "react-hook-form";

type FormInputs = {
  firstName: string;
  age: number;
  email: string;
};

export default function MyForm() {
  const methods = useForm<FormInputs>({
    // @todo 画面を戻って手入力を選択した場合、入力値を全てクリアするか要確認
    defaultValues: {},
    // 次の画面へ進むタイミングでバリデーションチェック
    mode: "onSubmit",
    // 一度バリデーションチェックが発生した後は都度チェック
    reValidateMode: "onChange",
  });

  const {
    // register,
    // handleSubmit,
    formState: { errors },
    // getValues,
    // setValue,
    // watch,
    control,
    handleSubmit,
  } = {
    ...methods,
  };

  const onSubmit = (data: FormInputs) => console.log(data);

  const trimValue = (value: string) => value.trim();

  const validateEmail = (value: string) => {
    if (!value) {
      return "メールアドレスを入力してください";
    }
    if (!/\S+@\S+\.\S+/.test(value)) {
      return "有効なメールアドレスを入力してください";
    }
    return true;
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="firstName"
          defaultValue=""
          rules={{ required: true, maxLength: 20 }}
          render={({ field }) => (
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                {...field}
                id="firstName"
                onChange={(e) => field.onChange(trimValue(e.target.value))}
              />
              {errors.firstName && errors.firstName.type === "required" && (
                <span className="error">This field is required</span>
              )}
              {errors.firstName && errors.firstName.type === "maxLength" && (
                <span className="error">Max length exceeded</span>
              )}
            </div>
          )}
        />
        <Controller
          control={control}
          name="email"
          rules={{ validate: validateEmail }}
          render={({ field }) => (
            <div>
              <label>メールアドレス:</label>
              <input {...field} />
              {errors.email && <span>{errors.email.message}</span>}
            </div>
          )}
        />
        <Controller
          name="age"
          defaultValue=""
          rules={{ required: true, max: 99 }}
          render={({ field }) => (
            <div>
              <label htmlFor="age">Age</label>
              <input
                {...field}
                id="age"
                type="number"
                onChange={(e) => field.onChange(trimValue(e.target.value))}
              />
              {errors.age && errors.age.type === "required" && (
                <span className="error">This field is required</span>
              )}
              {errors.age && errors.age.type === "max" && (
                <span className="error">Max age exceeded</span>
              )}
            </div>
          )}
        />

        <input type="submit" />
      </form>
    </FormProvider>
  );
}
