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

const Button1 = styled.button`
  background-color: rgba(75, 85, 99, 1);
  border-radius: 0.25rem;
  padding: 0.5rem;
  border-width: 2px;
  background-color: rgba(0, 0, 0, 1);
  &:hover {
    border-color: rgba(59, 130, 246, 1);
  }
  &:active {
    background-color: white;
  }
`;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

interface CommandLineProps {
  command: string,
  options: string,
  args: string
}

function copyToClipboard(text: string) {
  return navigator.clipboard.writeText(text);
}

export default function CommandLine(props: CommandLineProps) {
  const { command, options, args } = props;
  const [wig, setWig] = useState(false);
  const clipBoard = command + ' ' + options + ' ' + args;
  return (
    <div className="w-screen md:max-w-4xl bg-gray-600 inline-block border-solid border-opacity-20 border-gray-100 border-2 rounded-md p-2">
      <pre className="overflow-x-auto bg-black rounded-sm px-4 py-2">
        <div className="flex flex-row justify-between items-center">
          <div>
            <text className="text-green-500 select-none">$&gt;&nbsp;</text>
            <text className="text-purple-400">{command}</text>
            <text className="text-yellow-600">&nbsp;{options}</text>
            <text className="text-gray-200 mr-4">&nbsp;{args}</text>
          </div>
          <button 
            onClick={() => {navigator.clipboard.writeText(clipBoard);}}
            type="button"
            className="bg-gray-600 rounded p-2 border-2 border-black hover:border-blue-500 active:bg-gray-500"
          >
            <FontAwesomeIcon icon={['far', 'copy']} inverse size="lg" className="text-blue-500" />
          </button>
          {/* <Button1>
            <FontAwesomeIcon icon={['far', 'copy']} inverse size="lg" className="text-blue-500" />
          </Button1> */}
        </div>
      </pre>
    </div> 
  );
}