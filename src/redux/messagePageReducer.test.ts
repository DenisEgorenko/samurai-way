import {addMessageAC, messageInitialState, messagePageReducer, messagePageType} from './messagePageReducer';

test('Message should be added', () => {
    const resultState: messagePageType = messagePageReducer(messageInitialState, addMessageAC('text'))
    expect(resultState.messageData.length).toBe(8)
})
