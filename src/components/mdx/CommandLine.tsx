import styled from '@emotion/styled';



// const Terminal = styled.pre`
//   background-color: black;
//   border-radius: 0.25rem;
//   padding: 0.4rem 1rem;
// `;

// const Prompt = styled.text`
//   color: green;
//   margin-right: 1rem;
// `;

// const Command = styled.text`
//   color: orange;
//   margin-right: 1rem;
// `;

// const Options = styled.text`
//   margin-right: 1rem;
// `;

// const Args = styled.text`
//   color: white;
// `;

// const TerminalBorder = styled.div`
//   background-color: #4b5563;
//   color: whitesmoke;
//   display: inline-block;
//   border: 1px solid #727a85;
//   border-radius: 0.375rem;
//   padding: 10px;
// `;

interface CommandLineProps {
  command: string,
  options: string,
  args: string
}

export default function CommandLine(props: CommandLineProps) {
  const { command, options, args } = props;
  return (
    <div className="w-screen md:max-w-4xl bg-gray-600 inline-block border-solid border-opacity-20 border-gray-100 border-2 rounded-md p-3">
      <pre className="overflow-x-auto bg-black rounded-sm px-4 py-2">
        <text className="text-green-700">$&gt;</text>
        <text className="text-yellow-600">{command}</text>
        <text className="text-blue-500">{options}</text>
        <text className="text-gray-200 mr-4">{args}</text>
      </pre>
    </div> 
  );
}