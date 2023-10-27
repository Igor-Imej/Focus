from flask import Blueprint, render_template, request, flash, jsonify
from flask_login import login_required, current_user
from .models import Note
from . import db
import json

views = Blueprint('views', __name__)

@views.route('/', methods=['GET'])
@login_required
def index():
    return render_template("index.html", user=current_user)

@views.route('/notes', methods=['GET', 'POST'])
@login_required
def notes():
    if request.method == 'POST': 
        note = request.form.get('note')#Gets the note from the HTML 

        if len(note) < 1:
            flash('Note is too short!', category='error') 
        else:
            new_note = Note(data=note, user_id=current_user.id)  #providing the schema for the note 
            db.session.add(new_note) #adding the note to the database 
            db.session.commit()
            flash('Note added!', category='success')

    return render_template("notes.html", user=current_user)

@views.route('/delete-note', methods=['POST'])
def delete_note():
    note = json.loads(request.data) # load note id from js
    noteId = note['noteId'] # set noteId to be nodeId passed in data
    note = Note.query.get(noteId) # look for note that has that id
    if note: # if note with id exists
        if note.user_id == current_user.id: # if user owns this note
            db.session.delete(note) # delete note
            db.session.commit()
    
    return jsonify({}) # turn empty python dict into json object and return, we have to return something
