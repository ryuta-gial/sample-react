import { memo } from "react";

// React Hook Form
import { useFormContext } from "react-hook-form";


// コンポーネントによるレイアウト指定（cssはファイル末尾で管理）
const name = memo(() => {
  const {
    register,
    formState: { errors },
  } = useFormContext(); // retrieve all hook methods

  return (
    <>
      <div >
        <div >
          <input
            {...register("name", {
              validate: {
                // 必須入力チェック
                required: (value) => {
                  const isInvalid = !value;
                  if (isInvalid)
                    return `「（性）」が入力されていません。必須入力項目です。`;
                },
              },
            })}
            placeholder="姓"
          />
          {errors.name?.message && <div>{errors.name.message}</div>}
        </div>
      </div>
    </>
  );
});

export default name;
