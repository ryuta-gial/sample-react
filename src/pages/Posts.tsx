import React from "react";
import Name from "../components/name";
// React Hook Form
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
const Posts: React.FC = () => {
  type input = {
    name: String;
  };
  // React Hook Formのメソッド
  const methods = useForm<input>({
    // @todo 画面を戻って手入力を選択した場合、入力値を全てクリアするか要確認
    defaultValues: {},
    // 次の画面へ進むタイミングでバリデーションチェック
    mode: "onSubmit",
    // 一度バリデーションチェックが発生した後は都度チェック
    reValidateMode: "onChange",
  });

  const {
    register,
    handleSubmit,
    formState: { errors, submitCount, isDirty },
    getValues,
    setValue,
    watch,
  } = {
    ...methods,
  };

  const onSubmit: SubmitHandler<input> = (data) => {
    console.log(data);
    console.log(data);
  };

  return (
    <div>
      <h1>React-hook-form-try</h1>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Name />
          <button type="submit">次へ</button>
        </form>
      </FormProvider>
    </div>
  );
};

export default Posts;
