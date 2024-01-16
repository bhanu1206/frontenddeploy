import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
 
const steps = [
    {
        id: '0',
        message: 'Hello User!',
 
        // This calls the next id
        // i.e. id 1 in this case
        trigger: '1',
    }, {
        id: '1',
 
        // This message appears in
        // the bot chat bubble
        message: 'Please write your username',
        trigger: '2'
    }, {
        id: '2',
 
        // Here we want the user
        // to enter input
        user: true,
        trigger: '3',
    }, {
        id: '3',
        message: " hi {previousValue}, how can I help you?",
        trigger: '4'
    },  {
        id: '4',
        options: [
           
            // When we need to show a number of
            // options to choose we create alist
            // like this
            { value: 1, label: 'Delivery time',trigger: 5 },
            { value: 2, label: 'Customer care',trigger: 6},
            { value: 3, label: 'Oder a food',trigger: 7},
            { value: 4, label: 'Does Tastify deliver in train?',trigger: 8},
 
 
        ],
    },{
            id: '5',
            message: 'It takes 15-20 minutes to deliver the food',
            trigger: '4'
       
    },{
 
        id: '6',
        message: '91 83 7509 2754',
        trigger: '4',
       
    },{
 
        id: '7',
        message: 'Once you chosen a delivery service app and found a restaurant, you just have to create an account and place your order. You can order via the website or install the service app on your iPhone or Android phone. You can even tip online and give instructions (like leaving the food at your door) to the driver.',
        trigger: '4',
       
    },{
 
        id: '8',
        message: ' Yes, Tastify delivers food in trains through Tastify Traveler Food.',
        trigger: '4',
       
    }
 
];
 
// Creating our own theme
const theme = {
    background: '#ffffff',
    headerBgColor: '#FFA500',
    headerFontSize: '20px',
    botBubbleColor: '#ffbf00',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',
};
 
// Set some properties of the bot
const config = {
    botAvatar: "data:image/png;base64,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",
    floating: true,
};
 
function ChatBotTastify() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <ChatBot
 
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="Bot"
                    steps={steps}
                    {...config}
 
                />
            </ThemeProvider>
        </div>
    );
}
 
export default ChatBotTastify;