walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bMilitia\b/g, "Terrorist");
	v = v.replace(/\bmilitia\b/g, "terrorist");
	v = v.replace(/\bMilitias\b/g, "Terrorists");
	v = v.replace(/\bmilitias\b/g, "terrorists");
   v = v.replace(/\bantigovernment\b/g, "terrorist");
   v = v.replace(/\bprotestors\b/g, "terrorists");
   v = v.replace(/\bprotestor\b/g, "terrorist");
   v = v.replace(/\boccupation\b/g, "attack");


	textNode.nodeValue = v;
}