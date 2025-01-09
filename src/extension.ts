// Import the necessary modules
import * as vscode from 'vscode';
import { getWebviewContent } from './sidebar';

/**
 * This method is called when the extension is activated.
 * @param {vscode.ExtensionContext} context
 */
function activate(context: vscode.ExtensionContext) {
    console.log('Extension "scriptblocks" is now active!');

    // Create a Webview Panel for the Code Editor Side Panel
    const createCodeEditorPanel = () => {
        const panel = vscode.window.createWebviewPanel(
            'pythonSidebar', // Identifier for the view
            'Python Sidebar', // Title of the panel
            vscode.ViewColumn.Beside, // Show the panel beside the code editor
            {
                // Options for the Webview
                enableScripts: true,
                retainContextWhenHidden: true,
            }
        );

        // Set HTML content of the Webview
        panel.webview.html = getWebviewContent();
    };

    // Listen for when a .py file is opened
    const disposable = vscode.workspace.onDidOpenTextDocument((document) => {
        if (document.languageId === 'python') {
            createCodeEditorPanel();
        }
    });

    // Register the event listener
    context.subscriptions.push(disposable);
}

/**
 * This method is called when the extension is deactivated.
 */
function deactivate() {}

module.exports = {
    activate,
    deactivate
};
