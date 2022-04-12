import { FormLogin } from "@/components/Forms/FormLogin";
import { Button } from "@mui/material";
import { useLocale } from "@/hooks/useLocale";

const Login = () => {
  const { locale, setLocale } = useLocale();

  return (
    <>
      <Button
        color="primary"
        onClick={() => setLocale(locale === "pt-BR" ? "en-US" : "pt-BR")}
      >
        Alterar idioma - {locale}
      </Button>
      <FormLogin
        onSubmit={(values) => {
          console.log("values", values);
        }}
      />
    </>
  );
};

export default Login;
