define({ "api": [
  {
    "type": "delete",
    "url": "topics/:id/attachments/:id",
    "title": "Delete the attachment of the topic",
    "name": "Delete_topic_attachment",
    "group": "Attachments_Topic",
    "description": "<p>Delete specific attachment of specific topic. Cloud upload storage</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Topic ID,  Attachment ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Topic not found,  Attachment not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Topic not found\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Attachment  not found\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/AttachmentController.php",
    "groupTitle": "Attachments_Topic"
  },
  {
    "type": "get",
    "url": "topics/:id/attachments",
    "title": "List attachments of the topic",
    "name": "Index_topic_attachments",
    "group": "Attachments_Topic",
    "description": "<p>Returns the list of the topic attachments</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Topic ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "List",
            "description": "<p>List of the Topic attachments</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"data\": [\n {\n  \"id\": 51,\n  \"url\": \"http://lorempixel.com/640/480/?56978\",\n  \"cloud_public_id\": \"195\",\n  \"type\": \"image/x-portable-graymap\",\n  \"created_at\": \"2016-08-18 20:03:46\",\n  \"updated_at\": \"2016-08-18 20:03:46\",\n  \"pivot\": {\n  \"attachmenttable_id\": 81,\n  \"attachment_id\": 51\n  }\n  }\n  ],\n  \"_meta\": []\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Topic not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Topic not found\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/AttachmentController.php",
    "groupTitle": "Attachments_Topic"
  },
  {
    "type": "get",
    "url": "topics/:id/attachments/:id",
    "title": "Get the topic attachment",
    "name": "View_topic_attachment",
    "group": "Attachments_Topic",
    "description": "<p>Returns the attachment of the topic</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Topic ID, Attachment ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Json",
            "description": "<p>Topic attachment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"data\": {\n\"id\": 52,\n\"url\": \"http://lorempixel.com/640/480/?45068\",\n\"cloud_public_id\": \"958\",\n\"type\": \"application/vnd.kenameaapp\",\n\"created_at\": \"2016-08-18 20:03:46\",\n\"updated_at\": \"2016-08-18 20:03:46\"\n},\n\"_meta\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Topic not found,  Attachment not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Topic not found\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Attachment not found\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/AttachmentController.php",
    "groupTitle": "Attachments_Topic"
  },
  {
    "type": "post",
    "url": "topics/:id/attachments/",
    "title": "Upload attachment of the topic",
    "name": "upload_topic_attachment",
    "group": "Attachments_Topic",
    "description": "<p>Upload attachment of specific topic. Cloud upload storage</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Topic ID</p>"
          },
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "Key",
            "description": "<p>File  to upload, types are ...</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>multipart/form-data</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Topic not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Topic not found\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/AttachmentController.php",
    "groupTitle": "Attachments_Topic"
  },
  {
    "type": "delete",
    "url": "votes/:id/attachments/:id",
    "title": "Delete the attachment of the vote",
    "name": "Delete_vote_attachment",
    "group": "Attachments_Vote",
    "description": "<p>Delete specific attachment of specific vote. Cloud upload storage</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>Vote ID, Attachment ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Vote not found,  Attachment not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Vote  not found\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Attachment  not found\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/AttachmentController.php",
    "groupTitle": "Attachments_Vote"
  },
  {
    "type": "get",
    "url": "votes/:id/attachments",
    "title": "List attachments of the vote",
    "name": "Index_vote_attachments",
    "group": "Attachments_Vote",
    "description": "<p>Returns the list of the attachments of the vote</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Vote ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "List",
            "description": "<p>List of the Vote attachments</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\n\"data\": [\n{\n\"id\": 72,\n\"url\": \"http://lorempixel.com/640/480/?60000\",\n\"cloud_public_id\": \"610\",\n\"type\": \"video/webm\",\n\"created_at\": \"2016-08-18 20:03:54\",\n\"updated_at\": \"2016-08-18 20:03:54\",\n\"pivot\": {\n\"attachmenttable_id\": 83,\n\"attachment_id\": 72\n}\n}\n],\n\"_meta\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Vote  not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Vote not found\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/AttachmentController.php",
    "groupTitle": "Attachments_Vote"
  },
  {
    "type": "get",
    "url": "votes/:id/attachments/:id",
    "title": "Get the vote attachment",
    "name": "View_vote_attachment",
    "group": "Attachments_Vote",
    "description": "<p>Returns the specific attachment for specific vote</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Vote ID, Attachment ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Json",
            "description": "<p>Vote attachment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"data\": {\n\"id\": 72,\n\"url\": \"http://lorempixel.com/640/480/?60000\",\n\"cloud_public_id\": \"610\",\n\"type\": \"video/webm\",\n\"created_at\": \"2016-08-18 20:03:54\",\n\"updated_at\": \"2016-08-18 20:03:54\"\n},\n\"_meta\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Vote not found,  Attachment not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Vote not found\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Attachment not found\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/AttachmentController.php",
    "groupTitle": "Attachments_Vote"
  },
  {
    "type": "post",
    "url": "votes/:id/attachments/",
    "title": "Upload attachment of the vote",
    "name": "upload_vote_attachment",
    "group": "Attachments_Vote",
    "description": "<p>Upload attachment for specific vote. Cloud upload storage</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Vote ID</p>"
          },
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "Key",
            "description": "<p>File  to upload, types are ...</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>multipart/form-data</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Vote not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Vote not found\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/AttachmentController.php",
    "groupTitle": "Attachments_Vote"
  },
  {
    "type": "get",
    "url": "topics/:id/comments",
    "title": "List comments of the topic",
    "name": "Index_topic_comments",
    "group": "Comments_Topic",
    "description": "<p>Returns the list of comments of the specific topic</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Topic ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "List",
            "description": "<p>List of the Topic comments</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"data\": [\n{\n\"id\": 201,\n\"content_origin\": \"Voluptatem ut rerum sit vitae. Sunt vero eos aspernatur. Sed quia veniam ipsa incidunt.\\nIpsam nulla quia consequuntur. Amet voluptates ex temporibus et enim. Accusamus quasi aliquid modi et.\",\n\"rating\": 737,\n\"user_id\": 53,\n\"content_generated\": \"Occaecati et culpa est aut tenetur praesentium molestias. Sit doloremque ipsum tempora sed autem iusto porro. Aut est reprehenderit temporibus aspernatur. Dignissimos quos itaque enim assumenda.\",\n\"created_at\": \"2016-08-18 20:03:46\",\n\"updated_at\": \"2016-08-18 20:03:46\",\n\"pivot\": {\n\"commentable_id\": 81,\n\"comment_id\": 201\n}\n}\n],\n\"_meta\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Topic not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n Topic not found\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CommentController.php",
    "groupTitle": "Comments_Topic"
  },
  {
    "type": "get",
    "url": "topics/:id/comments/:id",
    "title": "Get the comment of the topic",
    "name": "View_topic_comment",
    "group": "Comments_Topic",
    "description": "<p>Returns the specific comment of the specific topic</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Topic ID, Comment ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Json",
            "description": "<p>Topic comment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"data\": {\n\"id\": 201,\n\"content_origin\": \"Voluptatem ut rerum sit vitae. Sunt vero eos aspernatur. Sed quia veniam ipsa incidunt.\\nIpsam nulla quia consequuntur. Amet voluptates ex temporibus et enim. Accusamus quasi aliquid modi et.\",\n\"rating\": 737,\n\"user_id\": 53,\n\"content_generated\": \"Occaecati et culpa est aut tenetur praesentium molestias. Sit doloremque ipsum tempora sed autem iusto porro. Aut est reprehenderit temporibus aspernatur. Dignissimos quos itaque enim assumenda.\",\n\"created_at\": \"2016-08-18 20:03:46\",\n\"updated_at\": \"2016-08-18 20:03:46\"\n},\n\"_meta\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Topic not found,  Comment not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n Topic not found\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n Comment not found\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CommentController.php",
    "groupTitle": "Comments_Topic"
  },
  {
    "type": "get",
    "url": "topics/:id/comments/:id/comments",
    "title": "List comments of the comment of the topic",
    "name": "View_topic_comment_comment",
    "group": "Comments_Topic",
    "description": "<p>Returns coments of the specific comment of the specific topic</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Topic ID, Comment ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Json",
            "description": "<p>Topic comment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"data\": [\n{\n\"id\": 253,\n\"content_origin\": \"taugHGSJAHGsjhGA\",\n\"rating\": 0,\n\"user_id\": 52,\n\"content_generated\": null,\n\"created_at\": \"2016-08-18 22:14:12\",\n\"updated_at\": \"2016-08-18 22:14:12\",\n\"pivot\": {\n\"comment_id\": 252,\n\"commentable_id\": 253\n}\n}\n],\n\"_meta\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Topic not found,  Comment not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n Topic not found\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n Comment not found\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CommentController.php",
    "groupTitle": "Comments_Topic"
  },
  {
    "type": "get",
    "url": "topics/:id/comments/:id/comments:id",
    "title": "Get the comment of the comments of the topic",
    "name": "View_topic_comment_comment_comment",
    "group": "Comments_Topic",
    "description": "<p>Returns coments of the specific comment of the specific topic</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Topic ID, Comment ID, Comment ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Json",
            "description": "<p>Topic comment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"data\": {\n\"id\": 253,\n\"content_origin\": \"taugHGSJAHGsjhGA\",\n\"rating\": 0,\n\"user_id\": 52,\n\"content_generated\": null,\n\"created_at\": \"2016-08-18 22:14:12\",\n\"updated_at\": \"2016-08-18 22:14:12\"\n},\n\"_meta\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Topic not found,  Comment not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n Topic not found\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n Comment not found\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CommentController.php",
    "groupTitle": "Comments_Topic"
  },
  {
    "type": "post",
    "url": "topics/:id/comments/:id/comments",
    "title": "Add the comment to the comment to the topic",
    "name": "add_topic_comment_comment",
    "group": "Comments_Topic",
    "description": "<p>Add the comment to the comment to specific topic.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Topic ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of user, who create comment</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Text",
            "description": "<p>Text of comment</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"data\": {\n\"user_id\": \"52\",\n\"content_origin\": \"yusdl;slkdf;lk\",\n\"updated_at\": \"2016-08-18 22:32:12\",\n\"created_at\": \"2016-08-18 22:32:12\",\n\"id\": 256\n},\n\"_meta\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Topic not found, Comment not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Topic not found\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Comment not found\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 400:",
          "content": "    HTTP/1.1 400 Bad request\n    {\n     {\n\"content_origin\": [\n\"Content is required\"\n],\n\"user_id\": [\n\"User not is authorized\"\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CommentController.php",
    "groupTitle": "Comments_Topic"
  },
  {
    "type": "post",
    "url": "topics/:id/comments/",
    "title": "Add the comment to the topic",
    "name": "add_topic_comments",
    "group": "Comments_Topic",
    "description": "<p>Add comment to specific topic.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Topic ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of user, who create comment</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Text",
            "description": "<p>Text of comment</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 OK\n{\n\"data\": {\n\"user_id\": \"52\",\n\"content_origin\": \"taugHGSJAHGsjhGA\",\n\"updated_at\": \"2016-08-18 21:40:28\",\n\"created_at\": \"2016-08-18 21:40:28\",\n\"id\": 252\n},\n\"_meta\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Topic not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Topic not found\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 400:",
          "content": "    HTTP/1.1 400 Bad request\n    {\n     {\n\"content_origin\": [\n\"Content is required\"\n],\n\"user_id\": [\n\"User not is authorized\"\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CommentController.php",
    "groupTitle": "Comments_Topic"
  },
  {
    "type": "delete",
    "url": "topics/:id/comments/:id",
    "title": "Delete the comment of the topic",
    "name": "delete_topic_comment",
    "group": "Comments_Topic",
    "description": "<p>Delete specific comment of specific topic.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Topic ID, Comment ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Topic not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Topic not found\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Comment not found\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CommentController.php",
    "groupTitle": "Comments_Topic"
  },
  {
    "type": "delete",
    "url": "topics/:id/comments/:id/comments/:id",
    "title": "Delete the comment of the comment of the topic",
    "name": "delete_topic_comment_comment",
    "group": "Comments_Topic",
    "description": "<p>Delete specific comment of the comment of specific topic.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Topic ID, Comment ID,  Comment ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Topic not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Topic not found\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Comment not found\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CommentController.php",
    "groupTitle": "Comments_Topic"
  },
  {
    "type": "put",
    "url": "topics/:id/comments/:id",
    "title": "Update the comment of the topic",
    "name": "update_topic_comment",
    "group": "Comments_Topic",
    "description": "<p>Update specific comment of specific topic.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Topic ID, Comment ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id of user, who create comment</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text of comment</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 OK\n{\n\"data\": {\n\"user_id\": \"52\",\n\"content_origin\": \"taugHGSJAHGsjhGA\",\n\"updated_at\": \"2016-08-18 21:40:28\",\n\"created_at\": \"2016-08-18 21:40:28\",\n\"id\": 252\n},\n\"_meta\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Topic not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Topic not found\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 400:",
          "content": "    HTTP/1.1 400 Bad request\n    {\n     {\n\"content_origin\": [\n\"Content is required\"\n],\n\"user_id\": [\n\"User not is authorized\"\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CommentController.php",
    "groupTitle": "Comments_Topic"
  },
  {
    "type": "put",
    "url": "topics/:id/comments/:id/comments:id",
    "title": "Update the comment of the comment of the topic",
    "name": "update_topic_comment_coment",
    "group": "Comments_Topic",
    "description": "<p>Update the comment of the comment of the  topic.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Topic ID, Comment ID, Comment ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id of user, who create comment</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text of comment</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 OK\n{\n\"data\": {\n\"user_id\": \"52\",\n\"content_origin\": \"gajshgjk\",\n\"updated_at\": \"2016-08-18 22:32:12\",\n\"created_at\": \"2016-08-18 22:32:12\",\n\"id\": 256\n},\n\"_meta\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Topic not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Topic not found\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 400:",
          "content": "    HTTP/1.1 400 Bad request\n    {\n     {\n\"content_origin\": [\n\"Content is required\"\n],\n\"user_id\": [\n\"User not is authorized\"\n]\n}\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CommentController.php",
    "groupTitle": "Comments_Topic"
  },
  {
    "type": "get",
    "url": "votes/:id/comments",
    "title": "List comments of the vote",
    "name": "Index_vote_comments",
    "group": "Comments_Vote",
    "description": "<p>Returns the list of  comments of the specific vote</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Vote ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "List",
            "description": "<p>List of the Vote comments</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"data\": [\n{\n\"id\": 222,\n\"content_origin\": \"Quod fugiat fuga sit. Beatae sit corrupti repudiandae vel aut sequi. Rem laboriosam nihil molestias.\",\n\"rating\": 182,\n\"user_id\": 52,\n\"content_generated\": \"Aut magni animi architecto repellat porro ea qui. Doloremque id dolorem inventore doloribus. Impedit ut et pariatur aut. Vero nobis qui velit quibusdam.\",\n\"created_at\": \"2016-08-18 20:03:54\",\n\"updated_at\": \"2016-08-18 20:03:54\",\n\"pivot\": {\n\"commentable_id\": 83,\n\"comment_id\": 222\n}\n}\n],\n\"_meta\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Vote not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n Vote not found\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CommentController.php",
    "groupTitle": "Comments_Vote"
  },
  {
    "type": "get",
    "url": "vote/:id/comments/:id",
    "title": "Get the comment of the vote",
    "name": "View_vote_comment",
    "group": "Comments_Vote",
    "description": "<p>Returns the specific comment of the specific vote</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Vote ID, Comment ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Json",
            "description": "<p>Vote comment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"data\": {\n\"id\": 222,\n\"content_origin\": \"Quod fugiat fuga sit. Beatae sit corrupti repudiandae vel aut sequi. Rem laboriosam nihil molestias.\",\n\"rating\": 182,\n\"user_id\": 52,\n\"content_generated\": \"Aut magni animi architecto repellat porro ea qui. Doloremque id dolorem inventore doloribus. Impedit ut et pariatur aut. Vero nobis qui velit quibusdam.\",\n\"created_at\": \"2016-08-18 20:03:54\",\n\"updated_at\": \"2016-08-18 20:03:54\"\n},\n\"_meta\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Vote not found,  Comment not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n Vote not found\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n Comment not found\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CommentController.php",
    "groupTitle": "Comments_Vote"
  },
  {
    "type": "get",
    "url": "votes/:id/comments/:id/comments",
    "title": "List comments of the comment of the vote",
    "name": "View_vote_comment_comment",
    "group": "Comments_Vote",
    "description": "<p>Returns comments of the  comment of the vote</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Vote ID, Comment ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Json",
            "description": "<p>Vote comment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"data\": [\n{\n\"id\": 253,\n\"content_origin\": \"taugHGSJAHGsjhGA\",\n\"rating\": 0,\n\"user_id\": 52,\n\"content_generated\": null,\n\"created_at\": \"2016-08-18 22:14:12\",\n\"updated_at\": \"2016-08-18 22:14:12\",\n\"pivot\": {\n\"comment_id\": 252,\n\"commentable_id\": 253\n}\n}\n],\n\"_meta\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Vote not found,  Comment not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n Vote not found\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n Comment not found\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CommentController.php",
    "groupTitle": "Comments_Vote"
  },
  {
    "type": "get",
    "url": "votes/:id/comments/:id/comments:id",
    "title": "Get the comment of the comments of the vote",
    "name": "View_vote_comment_comment_comment",
    "group": "Comments_Vote",
    "description": "<p>Returns coments of the specific comment of the specific vote</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Vote ID, Comment ID, Comment ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Json",
            "description": "<p>Vote comment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"data\": {\n\"id\": 253,\n\"content_origin\": \"taugHGSJAHGsjhGA\",\n\"rating\": 0,\n\"user_id\": 52,\n\"content_generated\": null,\n\"created_at\": \"2016-08-18 22:14:12\",\n\"updated_at\": \"2016-08-18 22:14:12\"\n},\n\"_meta\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Vote not found,  Comment not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n Vote not found\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n Comment not found\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CommentController.php",
    "groupTitle": "Comments_Vote"
  },
  {
    "type": "post",
    "url": "votes/:id/comments/",
    "title": "Add comment to the vote",
    "name": "add_vote_comment",
    "group": "Comments_Vote",
    "description": "<p>Add comment to specific vote.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Vote ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of user, who create comment</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Text",
            "description": "<p>Text of comment</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 OK\n{\n\"data\": {\n\"user_id\": \"52\",\n\"content_origin\": \"laksldk;lk\",\n\"updated_at\": \"2016-08-18 22:40:28\",\n\"created_at\": \"2016-08-18 22:40:28\",\n\"id\": 258\n},\n\"_meta\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Vote not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Vote not found\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 400:",
          "content": "    HTTP/1.1 400 Bad request\n    {\n     {\n\"content_origin\": [\n\"Content is required\"\n],\n\"user_id\": [\n\"User not is authorized\"\n]\n}\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CommentController.php",
    "groupTitle": "Comments_Vote"
  },
  {
    "type": "post",
    "url": "votes/:id/comments/:id/comments",
    "title": "Add comment to the comment to the vote",
    "name": "add_vote_comment_comment",
    "group": "Comments_Vote",
    "description": "<p>Add comment to comment to specific vote.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Vote ID, Comment ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of user, who create comment</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Text",
            "description": "<p>Text of comment</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"data\": {\n\"user_id\": \"52\",\n\"content_origin\": \"yusdl;slkdf;lk\",\n\"updated_at\": \"2016-08-18 22:56:12\",\n\"created_at\": \"2016-08-18 22:56:12\",\n\"id\": 259\n},\n\"_meta\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Vote not found, Comment not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Vote not found\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Comment not found\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 400:",
          "content": "    HTTP/1.1 400 Bad request\n    {\n     {\n\"content_origin\": [\n\"Content is required\"\n],\n\"user_id\": [\n\"User not is authorized\"\n]\n}\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CommentController.php",
    "groupTitle": "Comments_Vote"
  },
  {
    "type": "delete",
    "url": "votes/:id/comments/:id",
    "title": "Delete the comment of the vote",
    "name": "delete_vote_comment",
    "group": "Comments_Vote",
    "description": "<p>Delete specific comment of specific vote.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Vote ID, Comment ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Vote not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Vote not found\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Comment not found\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CommentController.php",
    "groupTitle": "Comments_Vote"
  },
  {
    "type": "delete",
    "url": "votes/:id/comments/:id/comments/:id",
    "title": "Delete the comment of the comment of the vote",
    "name": "delete_vote_comment_comment",
    "group": "Comments_Vote",
    "description": "<p>Delete specific comment of the comment of specific vote.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Vote ID, Comment ID,  Comment ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Vote not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Vote not found\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Comment not found\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CommentController.php",
    "groupTitle": "Comments_Vote"
  },
  {
    "type": "put",
    "url": "votes/:id/comments/:id",
    "title": "Update the comment of the vote",
    "name": "update_vote_comment",
    "group": "Comments_Vote",
    "description": "<p>Update specific comment of specific vote.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Vote ID, Comment ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id of user, who create comment</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text of comment</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 OK\n{\n\"data\": {\n\"user_id\": \"52\",\n\"content_origin\": \"taugkjhjkhhGA\",\n\"updated_at\": \"2016-08-18 22:50:28\",\n\"created_at\": \"2016-08-18 22:50:28\",\n\"id\": 258\n},\n\"_meta\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Vote not found, Comment not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Vote not found\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Comment not found\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 400:",
          "content": "    HTTP/1.1 400 Bad request\n    {\n     {\n\"content_origin\": [\n\"Content is required\"\n],\n\"user_id\": [\n\"User not is authorized\"\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CommentController.php",
    "groupTitle": "Comments_Vote"
  },
  {
    "type": "put",
    "url": "votes/:id/comments/:id/comments:id",
    "title": "Update the comment of the comment of the vote",
    "name": "update_vote_comment_coment",
    "group": "Comments_Vote",
    "description": "<p>Update specific comment of specific vote.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Vote ID, Comment ID, Comment ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id of user, who create comment</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Text of comment</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 OK\n{\n\"data\": {\n\"user_id\": \"52\",\n\"content_origin\": \"gajshuyuiyjk\",\n\"updated_at\": \"2016-08-18 22:59:12\",\n\"created_at\": \"2016-08-18 22:59:12\",\n\"id\": 260\n},\n\"_meta\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Vote not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Vote not found\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 400:",
          "content": "    HTTP/1.1 400 Bad request\n    {\n     {\n\"content_origin\": [\n\"Content is required\"\n],\n\"user_id\": [\n\"User not is authorized\"\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/CommentController.php",
    "groupTitle": "Comments_Vote"
  },
  {
    "type": "get",
    "url": "users/:id/messages",
    "title": "List user messages",
    "name": "Index_user_messages",
    "group": "Messages",
    "description": "<p>Returns the list of messages  of the specific user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "List",
            "description": "<p>List of the User messages</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"data\": [\n{\n\"id\": 41,\n\"user_from_id\": 51,\n\"user_to_id\": 55,\n\"message\": \"Voluptatem sequi ab quas qui quaerat voluptatibus at. Quo omnis in est. Magni ipsa minima culpa qui molestias ex minus. Magni ea commodi est inventore.\",\n\"is_read\": 1,\n\"created_at\": \"2016-08-18 20:03:52\",\n\"updated_at\": \"2016-08-18 20:03:52\"\n}\n],\n\"_meta\": {\n\"user_from\": {\n\"id\": 51,\n\"first_name\": \"Aditya\",\n\"last_name\": \"Jaskolski\",\n\"display_name\": \"verna.leffler\",\n\"email\": \"jefferey.kilback@example.com\",\n\"reputation\": 281,\n\"status_id\": 12,\n\"last_visit_at\": \"2016-02-12 05:17:40\",\n\"created_at\": \"2016-08-18 20:03:44\",\n\"updated_at\": \"2016-08-18 20:03:44\"\n},\n\"users_to\": [\n{\n\"id\": 55,\n\"first_name\": \"Joana\",\n\"last_name\": \"Leffler\",\n\"display_name\": \"johanna.rippin\",\n\"email\": \"pjohnston@example.net\",\n\"reputation\": 236,\n\"status_id\": 11,\n\"last_visit_at\": \"2016-06-04 21:12:32\",\n\"created_at\": \"2016-08-18 20:03:44\",\n\"updated_at\": \"2016-08-18 20:03:44\"\n}\n]\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>User not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n User not found\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/MessageController.php",
    "groupTitle": "Messages"
  },
  {
    "type": "get",
    "url": "users/:id/messages/:id",
    "title": "Get the user message",
    "name": "View_user_message",
    "group": "Messages",
    "description": "<p>Returns the specific message of the specific user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User ID, Message ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Json",
            "description": "<p>User message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"data\": {\n\"id\": 41,\n\"user_from_id\": 51,\n\"user_to_id\": 55,\n\"message\": \"Voluptatem sequi ab quas qui quaerat voluptatibus at. Quo omnis in est. Magni ipsa minima culpa qui molestias ex minus. Magni ea commodi est inventore.\",\n\"is_read\": 1,\n\"created_at\": \"2016-08-18 20:03:52\",\n\"updated_at\": \"2016-08-18 20:03:52\"\n},\n\"_meta\": {\n\"user_from\": {\n\"id\": 51,\n\"first_name\": \"Aditya\",\n\"last_name\": \"Jaskolski\",\n\"display_name\": \"verna.leffler\",\n\"email\": \"jefferey.kilback@example.com\",\n\"reputation\": 281,\n\"status_id\": 12,\n\"last_visit_at\": \"2016-02-12 05:17:40\",\n\"created_at\": \"2016-08-18 20:03:44\",\n\"updated_at\": \"2016-08-18 20:03:44\"\n},\n\"user_to\": {\n\"id\": 55,\n\"first_name\": \"Joana\",\n\"last_name\": \"Leffler\",\n\"display_name\": \"johanna.rippin\",\n\"email\": \"pjohnston@example.net\",\n\"reputation\": 236,\n\"status_id\": 11,\n\"last_visit_at\": \"2016-06-04 21:12:32\",\n\"created_at\": \"2016-08-18 20:03:44\",\n\"updated_at\": \"2016-08-18 20:03:44\"\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>User not found,  Message not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n User not found\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n Message not found\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/MessageController.php",
    "groupTitle": "Messages"
  },
  {
    "type": "delete",
    "url": "users/:id/messages/:id",
    "title": "Delete the message of the user",
    "name": "delete_user_message",
    "group": "Messages",
    "description": "<p>Delete specific user message.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User ID, Message ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>User not found, Message not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n User not found\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Message not found\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/MessageController.php",
    "groupTitle": "Messages"
  },
  {
    "type": "get",
    "url": "roles/",
    "title": "List roles",
    "name": "Index_roles",
    "group": "Roles",
    "description": "<p>Returns the list of the users' roles</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "No",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "List",
            "description": "<p>List of the Roles</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"data\": [\n{\n\"id\": 11,\n\"name\": \"Admin\",\n\"slug\": \"admin\",\n\"description\": null,\n\"parent_id\": null,\n\"created_at\": null,\n\"updated_at\": null\n},\n{\n\"id\": 12,\n\"name\": \"User\",\n\"slug\": \"user\",\n\"description\": null,\n\"parent_id\": null,\n\"created_at\": null,\n\"updated_at\": null\n}\n],\n\"_meta\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Topic not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n Topic not found\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/RoleController.php",
    "groupTitle": "Roles"
  },
  {
    "type": "get",
    "url": "topics/:id/tags",
    "title": "List tags of the topic",
    "name": "Index_topic_tags",
    "group": "Tags_Topic",
    "description": "<p>Returns the list of tags of the specific topic</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Topic ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "List",
            "description": "<p>List of the Topic tags</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"data\": [\n{\n\"id\": 185,\n\"name\": \"qui\",\n\"created_at\": \"2016-08-18 23:03:54\",\n\"updated_at\": \"2016-08-18 23:03:54\",\n\"pivot\": {\n\"taggable_id\": 88,\n\"tag_id\": 185\n}\n}\n],\n\"_meta\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Topic not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Topic not found\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/TagController.php",
    "groupTitle": "Tags_Topic"
  },
  {
    "type": "get",
    "url": "topics/:id/tags/:id",
    "title": "Get the tag of the topic",
    "name": "View_topic_tag",
    "group": "Tags_Topic",
    "description": "<p>Returns the specific tag of the specific topic</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Topic ID, Tag ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Json",
            "description": "<p>Topic tag</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"data\": {\n\"id\": 185,\n\"name\": \"qui\",\n\"created_at\": \"2016-08-18 23:03:54\",\n\"updated_at\": \"2016-08-18 23:03:54\"\n},\n\"_meta\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Topic not found,  Tag not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Topic not found\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Tag not found\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/TagController.php",
    "groupTitle": "Tags_Topic"
  },
  {
    "type": "post",
    "url": "topics/:id/tags/",
    "title": "Add tag to the topic",
    "name": "add_topic_tag",
    "group": "Tags_Topic",
    "description": "<p>Add tag to the specific topic.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Topic ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Name of the tag</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 OK\n{\n\"data\": {\n\"name\": \"ajsjsj\",\n\"updated_at\": \"2016-08-19 00:07:54\",\n\"created_at\": \"2016-08-19 00:07:54\",\n\"id\": 206\n},\n\"_meta\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Topic not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Topic not found\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 400:",
          "content": "    HTTP/1.1 400 Bad request\n{\n\"name\": [\n\"Name is required\"\n]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/TagController.php",
    "groupTitle": "Tags_Topic"
  },
  {
    "type": "delete",
    "url": "topics/:id/tags/:id",
    "title": "Delete the tag of the topic",
    "name": "delete_vote_tag",
    "group": "Tags_Topic",
    "description": "<p>Delete specific tag of specific topic.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Topic ID, Tag ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Topic not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Topic not found\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Tag not found\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/TagController.php",
    "groupTitle": "Tags_Topic"
  },
  {
    "type": "put",
    "url": "topics/:id/tags/:id",
    "title": "Update the tag of the topic",
    "name": "update_topic_tag",
    "group": "Tags_Topic",
    "description": "<p>Update specific tag of specific topic.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Topic ID, Tag ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Name of the tag</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>Method not allowed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response 405:",
          "content": " HTTP/1.1 404 Method Not Allowed\n {\nMethod Not Allowed\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/TagController.php",
    "groupTitle": "Tags_Topic"
  },
  {
    "type": "get",
    "url": "votes/:id/tags",
    "title": "List tags of the vote",
    "name": "Index_vote_tags",
    "group": "Tags_Vote",
    "description": "<p>Returns the list of tags of the specific vote</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Vote ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "List",
            "description": "<p>List of the Vote tags</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"data\": [\n{\n\"id\": 182,\n\"name\": \"qui\",\n\"created_at\": \"2016-08-18 20:03:54\",\n\"updated_at\": \"2016-08-18 20:03:54\",\n\"pivot\": {\n\"taggable_id\": 83,\n\"tag_id\": 182\n}\n}\n],\n\"_meta\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Vote not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Vote not found\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/TagController.php",
    "groupTitle": "Tags_Vote"
  },
  {
    "type": "get",
    "url": "votes/:id/tags/:id",
    "title": "Get the tag of the vote",
    "name": "View_vote_tag",
    "group": "Tags_Vote",
    "description": "<p>Returns the specific tag of the specific vote</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Vote ID, Tag ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Json",
            "description": "<p>Vote tag</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"data\": {\n\"id\": 182,\n\"name\": \"qui\",\n\"created_at\": \"2016-08-18 20:03:54\",\n\"updated_at\": \"2016-08-18 20:03:54\"\n},\n\"_meta\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Vote not found,  Tag not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Vote not found\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Tag not found\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/TagController.php",
    "groupTitle": "Tags_Vote"
  },
  {
    "type": "post",
    "url": "votes/:id/tags/",
    "title": "Add tag to the vote",
    "name": "add_vote_tag",
    "group": "Tags_Vote",
    "description": "<p>Add tag to the specific vote.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Vote ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Name of the tag</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 OK\n{\n\"data\": {\n\"name\": \"ascc\",\n\"updated_at\": \"2016-08-19 00:07:54\",\n\"created_at\": \"2016-08-19 00:07:54\",\n\"id\": 202\n},\n\"_meta\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Vote not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Vote not found\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 400:",
          "content": "    HTTP/1.1 400 Bad request\n{\n\"name\": [\n\"Name is required\"\n]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/TagController.php",
    "groupTitle": "Tags_Vote"
  },
  {
    "type": "delete",
    "url": "votes/:id/tags/:id",
    "title": "Delete the tag of the vote",
    "name": "delete_vote_tag",
    "group": "Tags_Vote",
    "description": "<p>Delete specific tag of specific vote.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Vote ID, Tag ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Vote not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Vote not found\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 404:",
          "content": "HTTP/1.1 404 Not Found\n{\n Tag not found\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/TagController.php",
    "groupTitle": "Tags_Vote"
  },
  {
    "type": "put",
    "url": "votes/:id/tags/:id",
    "title": "Update the tag of the vote",
    "name": "update_vote_tag",
    "group": "Tags_Vote",
    "description": "<p>Update specific tag of specific vote.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Vote ID, Tag ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Name of the tag</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "405",
            "description": "<p>Method not allowed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response 405:",
          "content": " HTTP/1.1 404 Method Not Allowed\n {\nMethod Not Allowed\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/TagController.php",
    "groupTitle": "Tags_Vote"
  },
  {
    "type": "post",
    "url": "users",
    "title": "Create user",
    "name": "Create_User",
    "group": "Users",
    "description": "<p>Returns the user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "No",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "User",
            "description": "<p>User like {key:value,}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 Created\n{\n        \"data\": [\n            {\n            \"id\": 1,\n            \"first_name\": \"Dayna\",\n            \"last_name\": \"Glover\",\n            \"display_name\": \"jesse.crist\",\n            \"email\": \"lcollier@example.org\",\n            \"reputation\": 959,\n            \"status_id\": 2,\n            \"last_visit_at\": \"2016-01-03 22:07:14\",\n            \"created_at\": \"2016-08-17 07:54:19\",\n            \"updated_at\": \"2016-08-17 07:54:19\"\n            }\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "Users"
  },
  {
    "type": "delete",
    "url": "users/:id",
    "title": "Delete specific user",
    "name": "Delete_User",
    "group": "Users",
    "description": "<p>Delete the user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>User ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204 No content": [
          {
            "group": "Success 204 No content",
            "optional": false,
            "field": "Empty",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ModelNotFoundException",
            "description": "<p><code>404</code> User not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PDOException",
            "description": "<p><code>500</code> Internal Server Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "User not found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "users",
    "title": "Index users",
    "name": "Index_Users",
    "group": "Users",
    "description": "<p>Returns the list of the users.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "No",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "List",
            "description": "<p>List of the Users like [{key:value,}, {key:value,}]</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n        \"data\": [\n            {\n            \"id\": 1,\n            \"first_name\": \"Dayna\",\n            \"last_name\": \"Glover\",\n            \"display_name\": \"jesse.crist\",\n            \"email\": \"lcollier@example.org\",\n            \"reputation\": 959,\n            \"status_id\": 2,\n            \"last_visit_at\": \"2016-01-03 22:07:14\",\n            \"created_at\": \"2016-08-17 07:54:19\",\n            \"updated_at\": \"2016-08-17 07:54:19\"\n            },\n            {\n            \"id\": 2,\n            \"first_name\": \"Pierce\",\n            \"last_name\": \"Morissette\",\n            \"display_name\": \"kreinger\",\n            \"email\": \"dayne.hessel@example.com\",\n            \"reputation\": 472,\n            \"status_id\": 2,\n            \"last_visit_at\": \"2016-05-17 10:26:08\",\n            \"created_at\": \"2016-08-17 07:54:19\",\n            \"updated_at\": \"2016-08-17 07:54:19\"\n            },\n            {\n            \"id\": 3,\n            \"first_name\": \"Esta\",\n            \"last_name\": \"Robel\",\n            \"display_name\": \"devon79\",\n            \"email\": \"pquigley@example.com\",\n            \"reputation\": 922,\n            \"status_id\": 2,\n            \"last_visit_at\": \"2015-10-24 03:47:00\",\n            \"created_at\": \"2016-08-17 07:54:19\",\n            \"updated_at\": \"2016-08-17 07:54:19\"\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "users/:id",
    "title": "Show user",
    "name": "Show_User",
    "group": "Users",
    "description": "<p>Returns the user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>User ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "User",
            "description": "<p>User like {key:value,}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 Ok\n{\n        \"data\": [\n            {\n            \"id\": 1,\n            \"first_name\": \"Dayna\",\n            \"last_name\": \"Glover\",\n            \"display_name\": \"jesse.crist\",\n            \"email\": \"lcollier@example.org\",\n            \"reputation\": 959,\n            \"status_id\": 2,\n            \"last_visit_at\": \"2016-01-03 22:07:14\",\n            \"created_at\": \"2016-08-17 07:54:19\",\n            \"updated_at\": \"2016-08-17 07:54:19\"\n            }\n            ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "users/:id/roles",
    "title": "Show role for specific user",
    "name": "Show_Users_Role",
    "group": "Users",
    "description": "<p>Show role for user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>User ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "User",
            "description": "<p>and Role like {key:value,}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"data\": [\n        {\n        \"id\": 2,\n        \"name\": \"User\",\n        \"slug\": \"user\",\n        \"description\": null,\n        \"parent_id\": null,\n        \"created_at\": null,\n        \"updated_at\": null,\n        \"pivot\": {\n        \"user_id\": 2,\n        \"role_id\": 2,\n        \"created_at\": \"2016-08-17 07:54:20\",\n        \"updated_at\": \"2016-08-17 07:54:20\",\n        \"granted\": 1\n        }\n    }\n    ],\n    \"_meta\": {\n        \"user\": {\n            \"id\": 2,\n            \"first_name\": \"Pierce\",\n            \"last_name\": \"Morissette\",\n            \"display_name\": \"kreinger\",\n            \"email\": \"dayne.hessel@example.com\",\n            \"reputation\": 472,\n            \"status_id\": 2,\n            \"last_visit_at\": \"2016-05-17 10:26:08\",\n            \"created_at\": \"2016-08-17 07:54:19\",\n            \"updated_at\": \"2016-08-17 07:54:19\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ModelNotFoundException",
            "description": "<p><code>404</code> User not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "User not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "user",
    "title": "Show logged in user",
    "name": "Show_logged_in_user",
    "group": "Users",
    "description": "<p>Returns the user.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "User",
            "description": "<p>User like {key:value,}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 Ok\n{\n        \"data\": [\n            {\n            \"id\": 1,\n            \"first_name\": \"Dayna\",\n            \"last_name\": \"Glover\",\n            \"display_name\": \"jesse.crist\",\n            \"email\": \"lcollier@example.org\",\n            \"reputation\": 959,\n            \"status_id\": 2,\n            \"last_visit_at\": \"2016-01-03 22:07:14\",\n            \"created_at\": \"2016-08-17 07:54:19\",\n            \"updated_at\": \"2016-08-17 07:54:19\"\n            }\n            ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "users/:id",
    "title": "Update specific user",
    "name": "Update_User",
    "group": "Users",
    "description": "<p>Updates the unique user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>User ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "User",
            "description": "<p>the User like {key:value,}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n        \"data\": [\n            {\n            \"id\": 1,\n            \"first_name\": \"Dayna\",\n            \"last_name\": \"Glover\",\n            \"display_name\": \"jesse.crist\",\n            \"email\": \"lcollier@example.org\",\n            \"reputation\": 959,\n            \"status_id\": 2,\n            \"last_visit_at\": \"2016-01-03 22:07:14\",\n            \"created_at\": \"2016-08-17 07:54:19\",\n            \"updated_at\": \"2016-08-17 07:54:19\"\n            }\n            ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ModelNotFoundException",
            "description": "<p><code>404</code> User not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "User not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "users/:id/roles/:id",
    "title": "Update role for specific user",
    "name": "Update_Users_Role",
    "group": "Users",
    "description": "<p>Updates the role for user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>User ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "User",
            "description": "<p>and Role like {key:value,}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n        \"data\": [\n            {\n            \"id\": 1,\n            \"first_name\": \"Dayna\",\n            \"last_name\": \"Glover\",\n            \"display_name\": \"jesse.crist\",\n            \"email\": \"lcollier@example.org\",\n            \"reputation\": 959,\n            \"status_id\": 2,\n            \"last_visit_at\": \"2016-01-03 22:07:14\",\n            \"created_at\": \"2016-08-17 07:54:19\",\n            \"updated_at\": \"2016-08-17 07:54:19\"\n            }\n            {\n     \"role\":{\n                \"name\": \"User\",\n                \"slug\": \"user\",\n                \"created_at\": \"2016-08-17 07:54:21\",\n                \"updated_at\": \"2016-08-17 07:54:21\",\n                }\n     }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ModelNotFoundException",
            "description": "<p><code>404</code> User not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "User not found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "Role not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/UserController.php",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "votes/:id/voteitems",
    "title": "Create new voteitem",
    "name": "Create_VoteItem",
    "group": "VoteItems",
    "description": "<p>Creates a new voteitem belongs to specific vote(IdeaHub).</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>Vote ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "VoteItem",
            "description": "<p>the VoteItem like {key:value,}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 Created\n{\n        \"data\": {\n            \"id\": 8,\n            \"vote_id\": 8,\n            \"name\": \"Rerum qui repudiandae iste blanditiis.\",\n            \"user_id\": 10,\n            \"created_at\": \"2016-08-17 07:54:48\",\n            \"updated_at\": \"2016-08-17 07:54:48\"\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDeniedException",
            "description": "<p><code>403</code> User needs to have permissions to action</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ModelNotFoundException",
            "description": "<p><code>404</code> Vote not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "You don't have a required ['voteitems'] permission.",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "Vote not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/VoteItemController.php",
    "groupTitle": "VoteItems"
  },
  {
    "type": "delete",
    "url": "votes/:id/voteitems/:id",
    "title": "Delete specific voteItem",
    "name": "Delete_voteItem",
    "group": "VoteItems",
    "description": "<p>Deletes the unique id voteItem according users permissions. Only Administrator or owner can delete voteItem.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>Vote ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204 No content": [
          {
            "group": "Success 204 No content",
            "optional": false,
            "field": "Empty",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDeniedException",
            "description": "<p><code>403</code> User needs to have permissions to action</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ModelNotFoundException",
            "description": "<p><code>404</code> Vote not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "You don't have a required ['voteitems'] permission.",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "Vote not found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "VoteItem not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/VoteItemController.php",
    "groupTitle": "VoteItems"
  },
  {
    "type": "get",
    "url": "votes/:id/voteitems",
    "title": "Index voteItems belongs to specific vote(IdeaHub)",
    "name": "Index_VoteItems",
    "group": "VoteItems",
    "description": "<p>Returns the list of the voteItems for specific vote(IdeaHub).</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Votes unique ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "List",
            "description": "<p>List of the VoteItems like [{key:value,}, {key:value,}]</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\n{\n        \"data\": [\n            {\n            \"id\": 8,\n            \"vote_id\": 8,\n            \"name\": \"Rerum qui repudiandae iste blanditiis.\",\n            \"user_id\": 10,\n            \"created_at\": \"2016-08-17 07:54:48\",\n            \"updated_at\": \"2016-08-17 07:54:48\"\n            },\n            {\n            \"id\": 29,\n            \"vote_id\": 8,\n            \"name\": \"Eos in sunt earum.\",\n            \"user_id\": 6,\n            \"created_at\": \"2016-08-17 07:54:51\",\n            \"updated_at\": \"2016-08-17 07:54:51\"\n            }\n        ],\n        \"_meta\": {\n            \"vote\": {\n                \"id\": 8,\n                \"user_id\": 7,\n                \"title\": \"qui\",\n                \"finished_at\": \"2016-08-23 07:08:33\",\n                \"is_single\": 1,\n                \"is_public\": 1,\n                \"created_at\": \"2016-08-17 07:54:34\",\n                \"updated_at\": \"2016-08-17 07:54:34\",\n                \"is_saved\": 1\n            }\n        }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ModelNotFoundException",
            "description": "<p><code>404</code> Vote not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Vote not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/VoteItemController.php",
    "groupTitle": "VoteItems"
  },
  {
    "type": "put",
    "url": "votes/:id/voteitems/:id",
    "title": "Update specific voteitem",
    "name": "Update_VoteItem",
    "group": "VoteItems",
    "description": "<p>Updates the unique VoteItem according users permissions. Administrator or owner can update VoteItem.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>Vote ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "List",
            "description": "<p>List of the VoteItems like [{key:value,}]</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n \"data\": {\n            \"id\": 8,\n            \"vote_id\": 8,\n            \"name\": \"Rerum qui repudiandae iste blanditiis.\",\n            \"user_id\": 10,\n            \"created_at\": \"2016-08-17 07:54:48\",\n            \"updated_at\": \"2016-08-17 07:54:48\"\n        },\n        \"_meta\": {\n            \"vote\": {\n                \"id\": 8,\n                \"user_id\": 7,\n                \"title\": \"qui\",\n                \"finished_at\": \"2016-08-23 07:08:33\",\n                \"is_single\": 1,\n                \"is_public\": 1,\n                \"created_at\": \"2016-08-17 07:54:34\",\n                \"updated_at\": \"2016-08-17 07:54:34\",\n                \"is_saved\": 1\n            }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDeniedException",
            "description": "<p><code>403</code> User needs to have permissions to action</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ModelNotFoundException",
            "description": "<p><code>404</code> Vote not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "You don't have a required ['voteitems'] permission.",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "Vote not found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "VoteItem not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/VoteItemController.php",
    "groupTitle": "VoteItems"
  },
  {
    "type": "get",
    "url": "votes/:id/voteitems/:id",
    "title": "View specific VoteItem",
    "name": "View_VoteItem",
    "group": "VoteItems",
    "description": "<p>Returns the unique VoteItem belongs to specific vote.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>Vote ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "VoteItem",
            "description": "<p>the VoteItem like {key:value,}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n        \"data\": {\n            \"id\": 8,\n            \"vote_id\": 8,\n            \"name\": \"Rerum qui repudiandae iste blanditiis.\",\n            \"user_id\": 10,\n            \"created_at\": \"2016-08-17 07:54:48\",\n            \"updated_at\": \"2016-08-17 07:54:48\"\n        },\n        \"_meta\": {\n            \"vote\": {\n                \"id\": 8,\n                \"user_id\": 7,\n                \"title\": \"qui\",\n                \"finished_at\": \"2016-08-23 07:08:33\",\n                \"is_single\": 1,\n                \"is_public\": 1,\n                \"created_at\": \"2016-08-17 07:54:34\",\n                \"updated_at\": \"2016-08-17 07:54:34\",\n                \"is_saved\": 1\n            },\n            \"user\": {\n                \"id\": 10,\n                \"first_name\": \"Ephraim\",\n                \"last_name\": \"Ziemann\",\n                \"display_name\": \"stephanie30\",\n                \"email\": \"lelia.murray@example.net\",\n                \"reputation\": 228,\n                \"status_id\": 2,\n                \"last_visit_at\": \"2015-11-09 20:25:28\",\n                \"created_at\": \"2016-08-17 07:54:19\",\n                \"updated_at\": \"2016-08-17 07:54:19\"\n            }\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDeniedException",
            "description": "<p><code>403</code> User needs to have permissions to action</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ModelNotFoundException",
            "description": "<p><code>404</code> Vote not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "You don't have a required ['voteitems'] permission.",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "Vote not found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "VoteItem not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/VoteItemController.php",
    "groupTitle": "VoteItems"
  },
  {
    "type": "post",
    "url": "votes/",
    "title": "Create new vote",
    "name": "Create_Vote",
    "group": "Votes",
    "description": "<p>Creates a new vote (IdeaHub).</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "No",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Vote",
            "description": "<p>the Vote like {key:value,}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 Created\n{\n        \"data\": {\n            \"id\": 7,\n            \"user_id\": 9,\n            \"title\": \"cupiditate\",\n            \"finished_at\": \"2016-08-26 07:08:33\",\n            \"is_single\": 1,\n            \"is_public\": 1,\n            \"created_at\": \"2016-08-17 07:54:33\",\n            \"updated_at\": \"2016-08-17 07:54:33\",\n            \"is_saved\": 1\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDeniedException",
            "description": "<p><code>403</code> User needs to have permissions to action</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "You don't have a required ['create'] permission.",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/VoteController.php",
    "groupTitle": "Votes"
  },
  {
    "type": "delete",
    "url": "votes/:id",
    "title": "Delete specific vote",
    "name": "Delete_vote",
    "group": "Votes",
    "description": "<p>Deletes the unique vote according users permissions. Only Administrator or owner can delete vote.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>Vote ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204 No content": [
          {
            "group": "Success 204 No content",
            "optional": false,
            "field": "Empty",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDeniedException",
            "description": "<p><code>403</code> User needs to have permissions to action</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ModelNotFoundException",
            "description": "<p><code>404</code> Vote not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "You don't have a required ['delete'] permission.",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "Vote not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/VoteController.php",
    "groupTitle": "Votes"
  },
  {
    "type": "get",
    "url": "users/:id/votes",
    "title": "Users votes (IdeaHubs)",
    "name": "Index_Votes",
    "group": "Votes",
    "description": "<p>Returns the list of the votes belongs to user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>User ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "List",
            "description": "<p>of the Votes like {key:value,}, {key:value,}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n\n\"data\":  {\n    \"id\": 13,\n    \"user_id\": 3,\n    \"title\": \"harum\",\n    \"finished_at\": \"2016-08-24 07:08:33\",\n    \"is_single\": 1,\n    \"is_public\": 1,\n    \"created_at\": \"2016-08-17 07:54:34\",\n    \"updated_at\": \"2016-08-17 07:54:34\",\n    \"is_saved\": 0\n    },\n    {\n    \"id\": 20,\n    \"user_id\": 3,\n    \"title\": \"nihil\",\n    \"finished_at\": \"2016-09-01 07:09:33\",\n    \"is_single\": 1,\n    \"is_public\": 1,\n    \"created_at\": \"2016-08-17 07:54:34\",\n    \"updated_at\": \"2016-08-17 07:54:34\",\n    \"is_saved\": 1\n    }\n\"_meta\": {\n    \"user\": {\n        \"id\": 3,\n        \"first_name\": \"Horace\",\n        \"last_name\": \"Muller\",\n        \"display_name\": \"tcarter\",\n        \"email\": \"leannon.genoveva@example.org\",\n        \"reputation\": 255,\n        \"status_id\": 1,\n        \"last_visit_at\": \"2016-05-01 09:11:06\",\n        \"created_at\": \"2016-08-17 07:54:19\",\n        \"updated_at\": \"2016-08-17 07:54:19\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDeniedException",
            "description": "<p><code>403</code> User needs to have permissions to action</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ModelNotFoundException",
            "description": "<p><code>404</code> User not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "You don't have a required ['index'] permission.",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "User not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/VoteController.php",
    "groupTitle": "Votes"
  },
  {
    "type": "get",
    "url": "votes",
    "title": "Index vote (IdeaHub)",
    "name": "Index_Votes",
    "group": "Votes",
    "description": "<p>Returns the list of the votes (IdeaHubs).</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "No",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "List",
            "description": "<p>of the Votes like {key:value,}, {key:value,}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n\"data\": [\n{\n\"data\": {\n\"id\": 7,\n\"user_id\": 9,\n\"title\": \"cupiditate\",\n\"finished_at\": \"2016-08-26 07:08:33\",\n\"is_single\": 1,\n\"is_public\": 1,\n\"created_at\": \"2016-08-17 07:54:33\",\n\"updated_at\": \"2016-08-17 07:54:33\",\n\"is_saved\": 1\n},\n\"_meta\": {\n\"user\": {\n\"id\": 9,\n\"first_name\": \"Horace\",\n\"last_name\": \"Muller\",\n\"display_name\": \"tcarter\",\n\"email\": \"leannon.genoveva@example.org\",\n\"reputation\": 255,\n\"status_id\": 1,\n\"last_visit_at\": \"2016-05-01 09:11:06\",\n\"created_at\": \"2016-08-17 07:54:19\",\n\"updated_at\": \"2016-08-17 07:54:19\"\n},\n\"likes\": 1,\n\"tags\": 1,\n\"comments\": 1\n}\n},\n{\n\"data\": {\n\"id\": 8,\n\"user_id\": 7,\n\"title\": \"qui\",\n\"finished_at\": \"2016-08-23 07:08:33\",\n\"is_single\": 1,\n\"is_public\": 1,\n\"created_at\": \"2016-08-17 07:54:34\",\n\"updated_at\": \"2016-08-17 07:54:34\",\n\"is_saved\": 1\n},\n\"_meta\": {\n\"user\": {\n\"id\": 7,\n\"first_name\": \"Jamaal\",\n\"last_name\": \"Schimmel\",\n\"display_name\": \"damon.wintheiser\",\n\"email\": \"iohara@example.com\",\n\"reputation\": 188,\n\"status_id\": 1,\n\"last_visit_at\": \"2016-08-12 10:35:05\",\n\"created_at\": \"2016-08-17 07:54:19\",\n\"updated_at\": \"2016-08-17 07:54:19\"\n},\n\"likes\": 1,\n\"tags\": 1,\n\"comments\": 1\n}\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDeniedException",
            "description": "<p><code>403</code> User needs to have permissions to action</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "You don't have a required ['index'] permission.",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "Vote not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/VoteController.php",
    "groupTitle": "Votes"
  },
  {
    "type": "put",
    "url": "votes/:id",
    "title": "Update specific vote (IdeaHub).",
    "name": "Update_Vote",
    "group": "Votes",
    "description": "<p>Updates the unique vote according users permissions. Administrator or owner can update vote.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>Vote ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Vote",
            "description": "<p>the Vote like {key:value,}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n        \"data\": {\n            \"id\": 7,\n            \"user_id\": 9,\n            \"title\": \"cupiditate\",\n            \"finished_at\": \"2016-08-26 07:08:33\",\n            \"is_single\": 1,\n            \"is_public\": 1,\n            \"created_at\": \"2016-08-17 07:54:33\",\n            \"updated_at\": \"2016-08-17 07:54:33\",\n            \"is_saved\": 1\n        }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDeniedException",
            "description": "<p><code>403</code> User needs to have permissions to action</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ModelNotFoundException",
            "description": "<p><code>404</code> Vote not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "You don't have a required ['update'] permission.",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "Vote not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/VoteController.php",
    "groupTitle": "Votes"
  },
  {
    "type": "get",
    "url": "users/:id/votes/:id",
    "title": "Users vote (IdeaHub)",
    "name": "Users_vote",
    "group": "Votes",
    "description": "<p>Returns the vote (IdeaHubs) belongs to user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>User ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Vote",
            "description": "<p>the Vote like {key:value,}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n\"data\": {\n    \"id\": 7,\n    \"user_id\": 9,\n    \"title\": \"cupiditate\",\n    \"finished_at\": \"2016-08-26 07:08:33\",\n    \"is_single\": 1,\n    \"is_public\": 1,\n    \"created_at\": \"2016-08-17 07:54:33\",\n    \"updated_at\": \"2016-08-17 07:54:33\",\n    \"is_saved\": 1\n},\n\"_meta\": {\n    \"user\": {\n        \"id\": 7,\n        \"first_name\": \"Jamaal\",\n        \"last_name\": \"Schimmel\",\n        \"display_name\": \"damon.wintheiser\",\n        \"email\": \"iohara@example.com\",\n        \"reputation\": 188,\n        \"status_id\": 1,\n        \"last_visit_at\": \"2016-08-12 10:35:05\",\n        \"created_at\": \"2016-08-17 07:54:19\",\n        \"updated_at\": \"2016-08-17 07:54:19\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDeniedException",
            "description": "<p><code>403</code> User needs to have permissions to action</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ModelNotFoundException",
            "description": "<p><code>404</code> User not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "You don't have a required ['view'] permission.",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "User not found",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "Vote not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/VoteController.php",
    "groupTitle": "Votes"
  },
  {
    "type": "get",
    "url": "votes/:id",
    "title": "View specific Vote",
    "name": "View_Vote",
    "group": "Votes",
    "description": "<p>Returns the unique Vote (IdeaHub).</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>Vote ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "Vote",
            "description": "<p>the Vote like {key:value,}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"data\": {\n        \"id\": 7,\n        \"user_id\": 9,\n        \"title\": \"cupiditate\",\n        \"finished_at\": \"2016-08-26 07:08:33\",\n        \"is_single\": 1,\n        \"is_public\": 1,\n        \"created_at\": \"2016-08-17 07:54:33\",\n        \"updated_at\": \"2016-08-17 07:54:33\",\n        \"is_saved\": 1\n    },\n    \"_meta\": {\n        \"user\": {\n            \"id\": 9,\n            \"first_name\": \"Horace\",\n            \"last_name\": \"Muller\",\n            \"display_name\": \"tcarter\",\n            \"email\": \"leannon.genoveva@example.org\",\n            \"reputation\": 255,\n            \"status_id\": 1,\n            \"last_visit_at\": \"2016-05-01 09:11:06\",\n            \"created_at\": \"2016-08-17 07:54:19\",\n            \"updated_at\": \"2016-08-17 07:54:19\"\n        },\n        \"likes\": 1,\n        \"tags\": 1,\n        \"comments\": 1\n        }\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDeniedException",
            "description": "<p><code>403</code> User needs to have permissions to action</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ModelNotFoundException",
            "description": "<p><code>404</code> Vote not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "You don't have a required ['view'] permission.",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "Vote not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/VoteController.php",
    "groupTitle": "Votes"
  }
] });
