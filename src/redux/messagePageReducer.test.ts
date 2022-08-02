import messagePageReducer, {
    addMessageAC,
    changeNewMessageTextAC,
    messageInitialState,
    messagePageType
} from './messagePageReducer';

test('Message should be added', () => {
    const resultState: messagePageType = messagePageReducer(messageInitialState, addMessageAC())
    expect(resultState.messageData.length).toBe(8)
})

test('New message text should be changed', () => {
    const newMessageText = 'Text'
    const resultState: messagePageType = messagePageReducer(messageInitialState, changeNewMessageTextAC(newMessageText))
    expect(resultState.newMessageText).toBe('Text')
})