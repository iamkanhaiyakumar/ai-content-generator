from flask import Flask, render_template, request, redirect, url_for, jsonify, flash
import openai  # This assumes you are using the OpenAI API. Replace with your preferred AI API.
import os

app = Flask(__name__)
app.secret_key = "supersecretkey"  # Required for flash messages

# OpenAI API Key
openai.api_key = os.getenv("OPENAI_API_KEY")

# A dictionary to store content generation history
content_history = []

# Home route - renders the main page
@app.route('/')
def home():
    return render_template('index.html', content_history=content_history)

# Route to generate AI-driven content
@app.route('/generate', methods=['POST'])
def generate_content():
    if request.method == 'POST':
        # Get user input
        prompt = request.form['prompt']
        max_tokens = int(request.form['max_tokens'])

        try:
            # Call the OpenAI API to generate content
            response = openai.Completion.create(
                engine="text-davinci-003",
                prompt=prompt,
                max_tokens=max_tokens
            )

            # Extract generated text
            generated_content = response['choices'][0]['text'].strip()

            # Add to content generation history
            content_history.append({
                'prompt': prompt,
                'content': generated_content
            })

            # Flash success message
            flash('Content generated successfully!', 'success')

        except Exception as e:
            flash(f'Error in generating content: {str(e)}', 'danger')

        return redirect(url_for('home'))

# Route to clear content generation history
@app.route('/clear_history', methods=['POST'])
def clear_history():
    content_history.clear()
    flash('Content history cleared.', 'info')
    return redirect(url_for('home'))

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
