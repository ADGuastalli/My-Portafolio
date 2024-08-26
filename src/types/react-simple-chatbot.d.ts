declare module "react-simple-chatbot" {
  import * as React from "react";

  interface Step {
    id: string;
    message?: string;
    trigger?: string;
    options?: Array<{
      value: any;
      label: string;
      trigger: string;
    }>;
    component?: React.ReactNode;
    end?: boolean;
  }

  interface ChatBotProps {
    steps: Step[];
    [key: string]: any; // Añade esta línea para permitir props adicionales si es necesario
  }

  const ChatBot: React.FC<ChatBotProps>;

  export default ChatBot;
}
